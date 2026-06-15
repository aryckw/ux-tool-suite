"""Workspace: manage on-disk UX concept workspace directories."""

from __future__ import annotations

import json
from pathlib import Path
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .spec import ConceptSpec

WORKSPACE_DIRS = ["spec/history", "design", "prototype", "build", "logs"]

_DRAFT_SPEC_TEMPLATE = {
    "schema_version": "1.0",
    "version": 1,
    "fidelity_stage": "draft",
    "intent": {"goal": ""},
    "elicitation_log": [],
}


class Workspace:
    """Manages the on-disk layout for a single UX concept workspace."""

    def __init__(self, root: Path) -> None:
        self._root = root

    # ------------------------------------------------------------------
    # Factories
    # ------------------------------------------------------------------

    @classmethod
    def create(cls, workspaces_root: Path, concept_id: str) -> "Workspace":
        """Create a new workspace at *workspaces_root/concept_id/*.

        Creates all required subdirectories and writes a minimal draft
        ``spec/concept-spec.json``.  Returns the new Workspace instance.
        """
        workspace_root = workspaces_root / concept_id
        # Create all required subdirectories
        for subdir in WORKSPACE_DIRS:
            (workspace_root / subdir).mkdir(parents=True, exist_ok=True)

        # Write minimal draft spec
        draft_data = dict(_DRAFT_SPEC_TEMPLATE)
        draft_data["id"] = concept_id
        # elicitation_log needs to be a fresh list, not a shared reference
        draft_data["elicitation_log"] = []

        spec_path = workspace_root / "spec" / "concept-spec.json"
        with spec_path.open("w", encoding="utf-8") as fh:
            json.dump(draft_data, fh, indent=2, ensure_ascii=False)
            fh.write("\n")

        return cls(workspace_root)

    @classmethod
    def open(cls, workspaces_root: Path, concept_id: str) -> "Workspace":
        """Open an existing workspace.

        Raises FileNotFoundError if the workspace directory does not exist.
        """
        workspace_root = workspaces_root / concept_id
        if not workspace_root.is_dir():
            raise FileNotFoundError(
                f"Workspace '{concept_id}' not found at {workspaces_root}"
            )
        return cls(workspace_root)

    # ------------------------------------------------------------------
    # Directory accessors
    # ------------------------------------------------------------------

    def spec_path(self) -> Path:
        """Return path to spec/concept-spec.json."""
        return self._root / "spec" / "concept-spec.json"

    def design_dir(self) -> Path:
        return self._root / "design"

    def prototype_dir(self) -> Path:
        return self._root / "prototype"

    def build_dir(self) -> Path:
        return self._root / "build"

    def logs_dir(self) -> Path:
        return self._root / "logs"

    # ------------------------------------------------------------------
    # Spec helpers
    # ------------------------------------------------------------------

    def load_spec(self) -> "ConceptSpec":
        """Load the concept spec from this workspace."""
        from .spec import ConceptSpec  # local import to avoid circular dependency
        return ConceptSpec.load(self.spec_path())

    def save_spec(self, spec: "ConceptSpec") -> None:
        """Save the concept spec to this workspace."""
        spec.save(self.spec_path())

    # ------------------------------------------------------------------
    # Design asset helpers
    # ------------------------------------------------------------------

    def list_designs(self) -> list[Path]:
        """Return all files in the design/ directory."""
        design = self.design_dir()
        if not design.is_dir():
            return []
        return sorted(p for p in design.iterdir() if p.is_file())

    # ------------------------------------------------------------------
    # Properties
    # ------------------------------------------------------------------

    @property
    def concept_id(self) -> str:
        return self._root.name

    @property
    def root(self) -> Path:
        return self._root
