"""Tests for KnowledgePack."""

from __future__ import annotations

from pathlib import Path

import pytest

from ux_suite.knowledge import KnowledgePack


# ---------------------------------------------------------------------------
# Path helpers
# ---------------------------------------------------------------------------

def _examples_dir() -> Path:
    """Resolve the shared/schemas/examples directory."""
    candidates = [
        Path(__file__).parents[4] / "shared" / "schemas" / "examples",
        Path(__file__).parents[3] / "schemas" / "examples",
    ]
    for candidate in candidates:
        if candidate.is_dir():
            return candidate
    tried = ", ".join(str(c) for c in candidates)
    raise FileNotFoundError(f"Cannot find examples dir. Tried: {tried}")


def _mock_lib_path() -> Path:
    return _examples_dir() / "knowledge-pack.mock-lib.json"


# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------

@pytest.fixture(scope="module")
def mock_lib() -> KnowledgePack:
    """Load the mock-lib knowledge pack once for this module."""
    return KnowledgePack.load(_mock_lib_path())


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------

class TestValidation:
    def test_validate_mock_lib(self, mock_lib):
        """Load knowledge-pack.mock-lib.json and confirm it validates."""
        # validate() should not raise; load() already validates, but call again to be explicit
        mock_lib.validate()


class TestComponentQueries:
    def test_get_component_by_name(self, mock_lib):
        """get_component('Button') returns the Button component dict."""
        component = mock_lib.get_component("Button")
        assert component is not None
        assert component["name"] == "Button"

    def test_get_component_by_name_case_insensitive(self, mock_lib):
        """Component lookup is case-insensitive on canonical name."""
        component = mock_lib.get_component("button")
        assert component is not None
        assert component["name"] == "Button"

    def test_get_component_by_alias(self, mock_lib):
        """get_component('Btn') returns the Button component (alias lookup)."""
        component = mock_lib.get_component("Btn")
        assert component is not None
        assert component["name"] == "Button"

    def test_get_component_by_alias_case_insensitive(self, mock_lib):
        """Alias lookup is case-insensitive."""
        component = mock_lib.get_component("btn")
        assert component is not None
        assert component["name"] == "Button"

    def test_get_component_not_found(self, mock_lib):
        """get_component with unknown name returns None."""
        result = mock_lib.get_component("NonExistentWidget")
        assert result is None

    def test_list_components(self, mock_lib):
        """list_components returns all canonical component names."""
        names = mock_lib.list_components()
        # The mock-lib has at least Button, Card, Input, Stat, ChartPlaceholder, AppShell
        assert "Button" in names
        assert "Card" in names
        assert "Input" in names
        assert "Stat" in names
        assert "ChartPlaceholder" in names
        assert "AppShell" in names
        # Should be unique names
        assert len(names) == len(set(names))


class TestCapabilitiesAndGaps:
    def test_get_capabilities(self, mock_lib):
        """get_capabilities returns a non-empty list."""
        caps = mock_lib.get_capabilities()
        assert isinstance(caps, list)
        assert len(caps) > 0

    def test_get_gaps(self, mock_lib):
        """get_gaps returns a non-empty list."""
        gaps = mock_lib.get_gaps()
        assert isinstance(gaps, list)
        assert len(gaps) > 0

    def test_covers_capability(self, mock_lib):
        """covers('data display') returns True for the mock-lib."""
        assert mock_lib.covers("data display") is True

    def test_covers_component_name_substring(self, mock_lib):
        """covers matches on component names too (e.g. 'Button')."""
        assert mock_lib.covers("Button") is True

    def test_covers_returns_false_for_gap(self, mock_lib):
        """covers returns False for something that is a known gap."""
        # 'data grid' is in gaps, not capabilities or component names
        assert mock_lib.covers("data grid") is False


class TestProperties:
    def test_library_name(self, mock_lib):
        assert mock_lib.library_name == "mock-internal-ui"

    def test_library_version(self, mock_lib):
        assert mock_lib.library_version == "1.0.0"

    def test_to_dict(self, mock_lib):
        d = mock_lib.to_dict()
        assert isinstance(d, dict)
        assert "meta" in d
        assert "components" in d
