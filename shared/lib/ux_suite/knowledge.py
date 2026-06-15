"""KnowledgePack: load and query a component knowledge-pack document."""

from __future__ import annotations

import json
from pathlib import Path

import jsonschema


def _find_schema(schema_filename: str) -> Path:
    """
    Search for a JSON schema file starting from this module's location.

    Search order:
      1. Path(__file__).parents[3] / "shared/schemas"  (repo layout)
      2. Path(__file__).parents[2] / "schemas"          (skill-bundle layout)
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


class KnowledgePack:
    """Wraps a knowledge-pack JSON document with query helpers."""

    _SCHEMA_FILENAME = "knowledge-pack.schema.json"

    def __init__(self, data: dict) -> None:
        self._data = data

    # ------------------------------------------------------------------
    # Construction
    # ------------------------------------------------------------------

    @classmethod
    def load(cls, path: Path) -> "KnowledgePack":
        """Load and validate a knowledge pack from a JSON file.

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
            raise ValueError(
                f"Schema validation failed for {path}: {exc.message}"
            ) from exc
        return instance

    # ------------------------------------------------------------------
    # Validation
    # ------------------------------------------------------------------

    def validate(self) -> None:
        """Validate against knowledge-pack.schema.json.

        Raises jsonschema.ValidationError if the document is invalid.
        """
        schema = _load_schema(self._SCHEMA_FILENAME)
        jsonschema.validate(instance=self._data, schema=schema)

    # ------------------------------------------------------------------
    # Component queries
    # ------------------------------------------------------------------

    def get_component(self, name: str) -> dict | None:
        """Find a component by canonical name or alias (case-insensitive).

        Returns the component dict or None if not found.
        """
        needle = name.lower()
        for component in self._data.get("components", []):
            if component.get("name", "").lower() == needle:
                return component
            aliases = [a.lower() for a in component.get("aliases", [])]
            if needle in aliases:
                return component
        return None

    def list_components(self) -> list[str]:
        """Return all canonical component names."""
        return [c.get("name", "") for c in self._data.get("components", [])]

    # ------------------------------------------------------------------
    # Capability / gap queries
    # ------------------------------------------------------------------

    def get_capabilities(self) -> list[str]:
        """Return the capabilities list."""
        return list(self._data.get("capabilities", []))

    def get_gaps(self) -> list[str]:
        """Return the gaps list."""
        return list(self._data.get("gaps", []))

    def covers(self, need: str) -> bool:
        """Rough heuristic: returns True if *need* is mentioned in capabilities
        or component names (case-insensitive substring match).
        """
        needle = need.lower()
        for cap in self.get_capabilities():
            if needle in cap.lower():
                return True
        for comp_name in self.list_components():
            if needle in comp_name.lower():
                return True
        return False

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
    def library_name(self) -> str:
        return self._data.get("meta", {}).get("library_name", "")

    @property
    def library_version(self) -> str:
        return self._data.get("meta", {}).get("library_version", "")
