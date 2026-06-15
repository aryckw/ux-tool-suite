"""ConceptSpec: load, validate, evolve, and persist UX concept specs."""

from __future__ import annotations

import json
import datetime
from pathlib import Path
from typing import Optional

import jsonschema

FIDELITY_ORDER = [
    "draft",
    "wireframe",
    "mockup",
    "interactive_prototype",
    "buildable",
    "built",
]

_VALID_ELICITATION_STATUSES = {"answered", "inferred", "assumed", "open"}


def _find_schema(schema_filename: str) -> Path:
    """
    Search for a JSON schema file starting from this module's location.

    Search order:
      1. Path(__file__).parents[3] / "shared/schemas"  (repo layout: shared/lib/ux_suite/spec.py)
      2. Path(__file__).parents[2] / "schemas"          (skill-bundle layout: references/lib/ux_suite/spec.py)
    """
    candidates = [
        Path(__file__).parents[3] / "shared" / "schemas" / schema_filename,
        Path(__file__).parents[2] / "schemas" / schema_filename,
    ]
    for candidate in candidates:
        if candidate.exists():
            return candidate
    tried = "\n  ".join(str(p) for p in candidates)
    raise FileNotFoundError(
        f"Cannot find schema '{schema_filename}'. Tried:\n  {tried}"
    )


def _load_schema(schema_filename: str) -> dict:
    schema_path = _find_schema(schema_filename)
    with schema_path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


class ConceptSpec:
    """Wraps a concept-spec JSON document with validation and lifecycle helpers."""

    _SCHEMA_FILENAME = "concept-spec.schema.json"

    def __init__(self, data: dict) -> None:
        self._data = data

    # ------------------------------------------------------------------
    # Construction
    # ------------------------------------------------------------------

    @classmethod
    def load(cls, path: Path) -> "ConceptSpec":
        """Load and validate a concept spec from a JSON file.

        Raises ValueError if the file cannot be parsed or fails schema validation.
        """
        try:
            with path.open("r", encoding="utf-8") as fh:
                data = json.load(fh)
        except json.JSONDecodeError as exc:
            raise ValueError(f"Invalid JSON in {path}: {exc}") from exc

        instance = cls(data)
        try:
            instance.validate()
        except jsonschema.ValidationError as exc:
            raise ValueError(f"Schema validation failed for {path}: {exc.message}") from exc
        return instance

    # ------------------------------------------------------------------
    # Validation
    # ------------------------------------------------------------------

    def validate(self) -> None:
        """Validate against the JSON schema.

        Raises jsonschema.ValidationError if the document is invalid.
        """
        schema = _load_schema(self._SCHEMA_FILENAME)
        jsonschema.validate(instance=self._data, schema=schema)

    # ------------------------------------------------------------------
    # Persistence
    # ------------------------------------------------------------------

    def save(self, path: Path) -> None:
        """Validate, then write the spec to *path* as formatted JSON."""
        self.validate()
        path.parent.mkdir(parents=True, exist_ok=True)
        with path.open("w", encoding="utf-8") as fh:
            json.dump(self._data, fh, indent=2, ensure_ascii=False)
            fh.write("\n")

    # ------------------------------------------------------------------
    # Lifecycle
    # ------------------------------------------------------------------

    def advance_stage(self, new_stage: str, workspace_path: Path) -> None:
        """Advance fidelity_stage to *new_stage*.

        Rules enforced:
        - new_stage must be exactly the next stage in FIDELITY_ORDER.
        - A snapshot of the current version is written to
          ``workspace_path/spec/history/v{version}.json`` before bumping.
        - The version counter is incremented.
        - Stage-specific preconditions must be met (see below).

        Raises ValueError with a descriptive message on any violation.
        """
        current_stage = self._data.get("fidelity_stage", "draft")

        # Validate ordering
        if new_stage not in FIDELITY_ORDER:
            raise ValueError(
                f"'{new_stage}' is not a valid fidelity stage. "
                f"Valid stages: {FIDELITY_ORDER}"
            )
        current_idx = FIDELITY_ORDER.index(current_stage)
        new_idx = FIDELITY_ORDER.index(new_stage)
        if new_idx != current_idx + 1:
            expected_next = (
                FIDELITY_ORDER[current_idx + 1]
                if current_idx + 1 < len(FIDELITY_ORDER)
                else "(none — already at final stage)"
            )
            raise ValueError(
                f"Cannot advance from '{current_stage}' to '{new_stage}'. "
                f"Expected next stage: '{expected_next}'."
            )

        # Check stage-specific preconditions before writing anything
        self._check_stage_preconditions(new_stage)

        # Snapshot current version
        history_dir = workspace_path / "spec" / "history"
        history_dir.mkdir(parents=True, exist_ok=True)
        snapshot_path = history_dir / f"v{self._data['version']}.json"
        with snapshot_path.open("w", encoding="utf-8") as fh:
            json.dump(self._data, fh, indent=2, ensure_ascii=False)
            fh.write("\n")

        # Bump version and stage
        self._data["version"] = self._data["version"] + 1
        self._data["fidelity_stage"] = new_stage

    def _check_stage_preconditions(self, new_stage: str) -> None:
        """Raise ValueError if preconditions for entering *new_stage* are not met."""

        if new_stage == "wireframe":
            # intent + information_architecture must be populated
            goal = self._data.get("intent", {}).get("goal", "")
            if not goal or not goal.strip():
                raise ValueError(
                    "Cannot advance to 'wireframe': intent.goal must be populated."
                )
            ia = self._data.get("information_architecture", {})
            if not ia or not ia.get("screens"):
                raise ValueError(
                    "Cannot advance to 'wireframe': "
                    "information_architecture.screens must be populated."
                )

        elif new_stage == "mockup":
            # composition + component_bindings must be populated
            composition = self._data.get("composition", [])
            if not composition:
                raise ValueError(
                    "Cannot advance to 'mockup': composition must be populated."
                )
            bindings = self._data.get("component_bindings", [])
            if not bindings:
                raise ValueError(
                    "Cannot advance to 'mockup': component_bindings must be populated."
                )

        elif new_stage == "interactive_prototype":
            # assets.prototype.path must be set
            proto_path = (
                self._data.get("assets", {})
                .get("prototype", {})
                .get("path", "")
            )
            if not proto_path or not proto_path.strip():
                raise ValueError(
                    "Cannot advance to 'interactive_prototype': "
                    "assets.prototype.path must be set."
                )

        elif new_stage == "buildable":
            # build_directives must be populated
            build_directives = self._data.get("build_directives", {})
            if not build_directives:
                raise ValueError(
                    "Cannot advance to 'buildable': build_directives must be populated."
                )
            # No unresolved gap:true bindings without a recorded decision
            unresolved_gaps = [
                b for b in self._data.get("component_bindings", [])
                if b.get("gap") is True
            ]
            if unresolved_gaps:
                needs = [b.get("need", "<unnamed>") for b in unresolved_gaps]
                raise ValueError(
                    "Cannot advance to 'buildable': the following component_bindings "
                    f"have gap=true with no recorded decision: {needs}. "
                    "Resolve each gap (e.g., set gap=false or add a build directive) "
                    "before advancing."
                )

        elif new_stage == "built":
            # assets.build.path must be set
            build_path = (
                self._data.get("assets", {})
                .get("build", {})
                .get("path", "")
            )
            if not build_path or not build_path.strip():
                raise ValueError(
                    "Cannot advance to 'built': assets.build.path must be set."
                )

    # ------------------------------------------------------------------
    # Elicitation log
    # ------------------------------------------------------------------

    def add_elicitation_entry(
        self,
        stage: str,
        question: str,
        answer: str,
        status: str,
        timestamp: Optional[str] = None,
        workspace_path: Optional[Path] = None,
    ) -> None:
        """Append an entry to elicitation_log.

        *status* must be one of: answered / inferred / assumed / open.
        If *workspace_path* is provided, the entry is also appended to
        ``workspace_path/logs/elicitation.jsonl``.
        """
        if status not in _VALID_ELICITATION_STATUSES:
            raise ValueError(
                f"Invalid status '{status}'. "
                f"Must be one of: {sorted(_VALID_ELICITATION_STATUSES)}"
            )
        if timestamp is None:
            timestamp = datetime.datetime.now(datetime.timezone.utc).isoformat()

        entry = {
            "stage": stage,
            "question": question,
            "answer": answer,
            "status": status,
            "timestamp": timestamp,
        }

        if "elicitation_log" not in self._data:
            self._data["elicitation_log"] = []
        self._data["elicitation_log"].append(entry)

        if workspace_path is not None:
            logs_dir = workspace_path / "logs"
            logs_dir.mkdir(parents=True, exist_ok=True)
            jsonl_path = logs_dir / "elicitation.jsonl"
            with jsonl_path.open("a", encoding="utf-8") as fh:
                fh.write(json.dumps(entry, ensure_ascii=False) + "\n")

    def get_assumed_entries(self) -> list[dict]:
        """Return elicitation_log entries with status='assumed'."""
        return [
            entry
            for entry in self._data.get("elicitation_log", [])
            if entry.get("status") == "assumed"
        ]

    # ------------------------------------------------------------------
    # Representation
    # ------------------------------------------------------------------

    def to_dict(self) -> dict:
        """Return the underlying data dict (a reference, not a copy)."""
        return self._data

    # ------------------------------------------------------------------
    # Properties
    # ------------------------------------------------------------------

    @property
    def fidelity_stage(self) -> str:
        return self._data.get("fidelity_stage", "draft")

    @property
    def version(self) -> int:
        return self._data.get("version", 1)

    @property
    def id(self) -> str:
        return self._data.get("id", "")
