"""Tests for Workspace."""

from __future__ import annotations

import json
from pathlib import Path

import pytest

from ux_suite.spec import ConceptSpec
from ux_suite.workspace import Workspace, WORKSPACE_DIRS


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------

class TestCreateWorkspace:
    def test_create_workspace_directories(self, tmp_path):
        """create() creates all expected subdirectories."""
        ws = Workspace.create(tmp_path, "my-concept-a1b2")

        for subdir in WORKSPACE_DIRS:
            assert (ws.root / subdir).is_dir(), f"Missing directory: {subdir}"

    def test_create_workspace_draft_spec_file(self, tmp_path):
        """create() writes a valid draft spec JSON file."""
        ws = Workspace.create(tmp_path, "my-concept-a1b2")

        spec_file = ws.spec_path()
        assert spec_file.exists(), "spec/concept-spec.json should exist"

        with spec_file.open() as fh:
            data = json.load(fh)

        assert data["schema_version"] == "1.0"
        assert data["id"] == "my-concept-a1b2"
        assert data["version"] == 1
        assert data["fidelity_stage"] == "draft"
        assert "intent" in data
        assert "elicitation_log" in data

    def test_create_workspace_returns_workspace_instance(self, tmp_path):
        """create() returns a Workspace with the correct concept_id and root."""
        ws = Workspace.create(tmp_path, "widget-foo-c3d4")
        assert ws.concept_id == "widget-foo-c3d4"
        assert ws.root == tmp_path / "widget-foo-c3d4"

    def test_create_workspace_spec_path(self, tmp_path):
        """spec_path() returns the correct path inside the workspace."""
        ws = Workspace.create(tmp_path, "spec-path-test")
        expected = tmp_path / "spec-path-test" / "spec" / "concept-spec.json"
        assert ws.spec_path() == expected


class TestOpenWorkspace:
    def test_open_workspace(self, tmp_path):
        """create then open returns the same workspace."""
        Workspace.create(tmp_path, "open-test-e5f6")
        ws = Workspace.open(tmp_path, "open-test-e5f6")

        assert ws.concept_id == "open-test-e5f6"
        assert ws.root == tmp_path / "open-test-e5f6"

    def test_open_nonexistent_workspace(self, tmp_path):
        """open() raises FileNotFoundError for a workspace that does not exist."""
        with pytest.raises(FileNotFoundError):
            Workspace.open(tmp_path, "nonexistent-workspace")


class TestDirectoryAccessors:
    @pytest.fixture
    def ws(self, tmp_path) -> Workspace:
        return Workspace.create(tmp_path, "accessor-test")

    def test_design_dir(self, ws):
        assert ws.design_dir() == ws.root / "design"
        assert ws.design_dir().is_dir()

    def test_prototype_dir(self, ws):
        assert ws.prototype_dir() == ws.root / "prototype"
        assert ws.prototype_dir().is_dir()

    def test_build_dir(self, ws):
        assert ws.build_dir() == ws.root / "build"
        assert ws.build_dir().is_dir()

    def test_logs_dir(self, ws):
        assert ws.logs_dir() == ws.root / "logs"
        assert ws.logs_dir().is_dir()


class TestSpecOperations:
    def test_load_spec_returns_concept_spec(self, tmp_path):
        """load_spec() returns a ConceptSpec instance."""
        ws = Workspace.create(tmp_path, "load-spec-test")
        spec = ws.load_spec()
        assert isinstance(spec, ConceptSpec)

    def test_load_spec_has_correct_id(self, tmp_path):
        """The loaded spec has the concept_id set from create()."""
        ws = Workspace.create(tmp_path, "id-check-a9b0")
        spec = ws.load_spec()
        assert spec.id == "id-check-a9b0"

    def test_load_and_save_spec(self, tmp_path):
        """Create workspace, load spec, modify goal, save, reload and verify."""
        ws = Workspace.create(tmp_path, "roundtrip-test")

        # Load and modify
        spec = ws.load_spec()
        assert isinstance(spec, ConceptSpec)
        spec.to_dict()["intent"]["goal"] = "Updated goal for testing"

        # Save back
        ws.save_spec(spec)

        # Reload and verify
        reloaded = ws.load_spec()
        assert reloaded.to_dict()["intent"]["goal"] == "Updated goal for testing"
        assert reloaded.id == "roundtrip-test"
        assert reloaded.version == 1
        assert reloaded.fidelity_stage == "draft"


class TestListDesigns:
    def test_list_designs_empty(self, tmp_path):
        """list_designs() returns an empty list when no design files exist."""
        ws = Workspace.create(tmp_path, "no-designs")
        assert ws.list_designs() == []

    def test_list_designs_returns_files(self, tmp_path):
        """list_designs() returns paths to files placed in design/."""
        ws = Workspace.create(tmp_path, "with-designs")

        # Create some design files
        (ws.design_dir() / "wireframe.svg").write_text("<svg/>")
        (ws.design_dir() / "mockup.png").write_bytes(b"\x89PNG")

        designs = ws.list_designs()
        design_names = {p.name for p in designs}
        assert "wireframe.svg" in design_names
        assert "mockup.png" in design_names
        assert len(designs) == 2
