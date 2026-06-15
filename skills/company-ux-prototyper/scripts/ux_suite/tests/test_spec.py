"""Tests for ConceptSpec."""

from __future__ import annotations

import json
from pathlib import Path

import jsonschema
import pytest

from ux_suite.spec import ConceptSpec, FIDELITY_ORDER


# ---------------------------------------------------------------------------
# Path helpers
# ---------------------------------------------------------------------------

def _examples_dir() -> Path:
    """Resolve the shared/schemas/examples directory."""
    # From shared/lib/ux_suite/tests/test_spec.py, parents[4] = repo root
    candidates = [
        Path(__file__).parents[4] / "shared" / "schemas" / "examples",
        Path(__file__).parents[3] / "schemas" / "examples",
    ]
    for candidate in candidates:
        if candidate.is_dir():
            return candidate
    tried = ", ".join(str(c) for c in candidates)
    raise FileNotFoundError(f"Cannot find examples dir. Tried: {tried}")


def _weather_dashboard_path() -> Path:
    return _examples_dir() / "concept-spec.weather-dashboard.json"


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------

@pytest.fixture
def minimal_draft_data() -> dict:
    """A minimal valid draft spec."""
    return {
        "schema_version": "1.0",
        "id": "test-concept-abc1",
        "version": 1,
        "fidelity_stage": "draft",
        "intent": {"goal": "Test goal"},
        "elicitation_log": [],
    }


@pytest.fixture
def minimal_draft_spec(minimal_draft_data) -> ConceptSpec:
    return ConceptSpec(minimal_draft_data)


@pytest.fixture
def wireframe_ready_data() -> dict:
    """A draft spec that satisfies wireframe preconditions."""
    return {
        "schema_version": "1.0",
        "id": "test-concept-abc2",
        "version": 1,
        "fidelity_stage": "draft",
        "intent": {
            "goal": "Provide a clear dashboard for weather data.",
        },
        "information_architecture": {
            "screens": [
                {"id": "dashboard", "name": "Main Dashboard"}
            ]
        },
        "elicitation_log": [],
    }


@pytest.fixture
def mockup_ready_data() -> dict:
    """A wireframe spec that satisfies mockup preconditions."""
    return {
        "schema_version": "1.0",
        "id": "test-concept-abc3",
        "version": 2,
        "fidelity_stage": "wireframe",
        "intent": {
            "goal": "Provide a clear dashboard for weather data.",
        },
        "information_architecture": {
            "screens": [
                {"id": "dashboard", "name": "Main Dashboard"}
            ]
        },
        "composition": [
            {"screen_id": "dashboard", "regions": [{"name": "header"}]}
        ],
        "component_bindings": [
            {
                "screen_id": "dashboard",
                "need": "Navigation header",
                "component": "AppShell",
            }
        ],
        "elicitation_log": [],
    }


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------

class TestValidation:
    def test_validate_valid_spec(self):
        """Load the example weather-dashboard spec and confirm it validates."""
        path = _weather_dashboard_path()
        spec = ConceptSpec.load(path)
        # validate() should not raise
        spec.validate()

    def test_validate_minimal_spec(self, minimal_draft_spec):
        """A minimal draft spec with only required fields should be valid."""
        minimal_draft_spec.validate()

    def test_validate_missing_required_field(self):
        """A spec missing 'intent' must raise jsonschema.ValidationError."""
        data = {
            "schema_version": "1.0",
            "id": "bad-spec-0000",
            "version": 1,
            "fidelity_stage": "draft",
            # intentionally omitting "intent"
        }
        spec = ConceptSpec(data)
        with pytest.raises(jsonschema.ValidationError):
            spec.validate()


class TestAdvanceStage:
    def test_advance_stage_requires_intent(self, tmp_path):
        """Advancing from draft without intent.goal populated raises ValueError."""
        data = {
            "schema_version": "1.0",
            "id": "no-intent-0001",
            "version": 1,
            "fidelity_stage": "draft",
            "intent": {"goal": ""},  # empty goal
            "elicitation_log": [],
        }
        spec = ConceptSpec(data)
        with pytest.raises(ValueError, match="intent.goal"):
            spec.advance_stage("wireframe", tmp_path)

    def test_advance_stage_requires_intent_goal_missing_ia(self, tmp_path):
        """Advancing to wireframe without information_architecture.screens raises ValueError."""
        data = {
            "schema_version": "1.0",
            "id": "no-ia-0001",
            "version": 1,
            "fidelity_stage": "draft",
            "intent": {"goal": "A goal"},
            "elicitation_log": [],
        }
        spec = ConceptSpec(data)
        with pytest.raises(ValueError, match="information_architecture"):
            spec.advance_stage("wireframe", tmp_path)

    def test_advance_stage_wireframe_to_mockup_requires_composition(self, tmp_path):
        """Advancing wireframe->mockup without composition raises ValueError."""
        data = {
            "schema_version": "1.0",
            "id": "wire-no-comp-0001",
            "version": 2,
            "fidelity_stage": "wireframe",
            "intent": {"goal": "A goal"},
            "information_architecture": {
                "screens": [{"id": "dashboard", "name": "Main"}]
            },
            "component_bindings": [
                {"screen_id": "dashboard", "need": "A need", "component": "Button"}
            ],
            "elicitation_log": [],
        }
        spec = ConceptSpec(data)
        with pytest.raises(ValueError, match="composition"):
            spec.advance_stage("mockup", tmp_path)

    def test_advance_stage_wireframe_to_mockup_requires_bindings(self, tmp_path):
        """Advancing wireframe->mockup without component_bindings raises ValueError."""
        data = {
            "schema_version": "1.0",
            "id": "wire-no-bind-0001",
            "version": 2,
            "fidelity_stage": "wireframe",
            "intent": {"goal": "A goal"},
            "information_architecture": {
                "screens": [{"id": "dashboard", "name": "Main"}]
            },
            "composition": [
                {"screen_id": "dashboard", "regions": [{"name": "header"}]}
            ],
            "elicitation_log": [],
        }
        spec = ConceptSpec(data)
        with pytest.raises(ValueError, match="component_bindings"):
            spec.advance_stage("mockup", tmp_path)

    def test_advance_stage_wireframe_to_mockup_success(self, mockup_ready_data, tmp_path):
        """A correctly populated wireframe spec advances to mockup successfully."""
        spec = ConceptSpec(mockup_ready_data)
        spec.advance_stage("mockup", tmp_path)

        assert spec.fidelity_stage == "mockup"
        assert spec.version == 3

        # Snapshot must exist
        snapshot = tmp_path / "spec" / "history" / "v2.json"
        assert snapshot.exists()
        with snapshot.open() as fh:
            snap_data = json.load(fh)
        assert snap_data["fidelity_stage"] == "wireframe"
        assert snap_data["version"] == 2

    def test_advance_stage_skipping_raises_error(self, wireframe_ready_data, tmp_path):
        """Skipping stages (draft -> mockup) raises ValueError."""
        data = wireframe_ready_data.copy()
        data["fidelity_stage"] = "draft"
        spec = ConceptSpec(data)
        with pytest.raises(ValueError, match="wireframe"):
            spec.advance_stage("mockup", tmp_path)

    def test_advance_stage_invalid_stage_name(self, minimal_draft_data, tmp_path):
        """An unrecognised stage name raises ValueError."""
        spec = ConceptSpec(minimal_draft_data)
        with pytest.raises(ValueError, match="not a valid fidelity stage"):
            spec.advance_stage("superdesign", tmp_path)


class TestElicitationLog:
    def test_add_elicitation_entry(self, minimal_draft_spec):
        """add_elicitation_entry appends an entry with the correct structure."""
        minimal_draft_spec.add_elicitation_entry(
            stage="draft",
            question="What is the primary user?",
            answer="End consumer.",
            status="answered",
            timestamp="2026-06-01T10:00:00Z",
        )
        log = minimal_draft_spec.to_dict()["elicitation_log"]
        assert len(log) == 1
        entry = log[0]
        assert entry["stage"] == "draft"
        assert entry["question"] == "What is the primary user?"
        assert entry["answer"] == "End consumer."
        assert entry["status"] == "answered"
        assert entry["timestamp"] == "2026-06-01T10:00:00Z"

    def test_add_elicitation_entry_invalid_status(self, minimal_draft_spec):
        """An invalid status raises ValueError."""
        with pytest.raises(ValueError, match="Invalid status"):
            minimal_draft_spec.add_elicitation_entry(
                stage="draft",
                question="Q?",
                answer="A.",
                status="dunno",
            )

    def test_add_elicitation_entry_mirrors_to_jsonl(self, minimal_draft_spec, tmp_path):
        """When workspace_path is provided, entry is appended to logs/elicitation.jsonl."""
        minimal_draft_spec.add_elicitation_entry(
            stage="draft",
            question="Q?",
            answer="A.",
            status="open",
            workspace_path=tmp_path,
        )
        jsonl_path = tmp_path / "logs" / "elicitation.jsonl"
        assert jsonl_path.exists()
        lines = jsonl_path.read_text().strip().splitlines()
        assert len(lines) == 1
        entry = json.loads(lines[0])
        assert entry["status"] == "open"

    def test_get_assumed_entries(self):
        """get_assumed_entries returns only assumed entries."""
        data = {
            "schema_version": "1.0",
            "id": "assumed-test-0001",
            "version": 1,
            "fidelity_stage": "draft",
            "intent": {"goal": "Test"},
            "elicitation_log": [
                {"stage": "draft", "question": "Q1", "answer": "A1", "status": "answered"},
                {"stage": "draft", "question": "Q2", "answer": "A2", "status": "assumed"},
                {"stage": "draft", "question": "Q3", "answer": "A3", "status": "inferred"},
                {"stage": "draft", "question": "Q4", "answer": "A4", "status": "assumed"},
            ],
        }
        spec = ConceptSpec(data)
        assumed = spec.get_assumed_entries()
        assert len(assumed) == 2
        assert all(e["status"] == "assumed" for e in assumed)
        questions = {e["question"] for e in assumed}
        assert questions == {"Q2", "Q4"}


class TestProperties:
    def test_fidelity_stage_property(self, minimal_draft_spec):
        assert minimal_draft_spec.fidelity_stage == "draft"

    def test_version_property(self, minimal_draft_spec):
        assert minimal_draft_spec.version == 1

    def test_id_property(self, minimal_draft_spec):
        assert minimal_draft_spec.id == "test-concept-abc1"

    def test_to_dict_returns_data(self, minimal_draft_data, minimal_draft_spec):
        assert minimal_draft_spec.to_dict() is minimal_draft_spec._data
