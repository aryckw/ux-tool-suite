"""
new_concept.py — Create a new concept workspace.

Usage:
    python scripts/new_concept.py --id CONCEPT_ID --goal "The design goal"
                                  [--workspaces-dir PATH] [--force]

Creates the following layout under workspaces/<concept-id>/:
    spec/concept-spec.json   ← blank draft spec
    spec/history/            ← empty dir
    design/                  ← empty dir
    prototype/               ← empty dir
    build/                   ← empty dir
    logs/elicitation.jsonl   ← empty file
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent

SLUG_RE = re.compile(r"^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$")

BLANK_SPEC_TEMPLATE: dict = {
    "schema_version": "1.0",
    "id": "",           # filled in at runtime
    "version": 1,
    "fidelity_stage": "draft",
    "intent": {
        "goal": "",     # filled in at runtime
    },
    "elicitation_log": [],
}


def validate_slug(concept_id: str) -> None:
    """Raise ValueError if concept_id is not a valid slug."""
    if not SLUG_RE.match(concept_id):
        raise ValueError(
            f"Invalid concept ID {concept_id!r}. "
            "Must contain only alphanumeric characters and hyphens "
            "(e.g. 'weather-dashboard', 'onboarding-v2')."
        )


def create_workspace(concept_id: str, goal: str, workspaces_dir: Path, force: bool) -> Path:
    """
    Create the workspace directory tree and seed files.

    Returns the path to the newly created workspace root.
    Raises FileExistsError if the workspace already exists and force is False.
    """
    workspace = workspaces_dir / concept_id

    if workspace.exists():
        if force:
            print(
                f"WARNING: workspace already exists and will be overwritten: {workspace}",
                file=sys.stderr,
            )
        else:
            raise FileExistsError(
                f"Workspace already exists: {workspace}\n"
                "Use --force to overwrite."
            )

    # --- directories ---
    dirs_to_create = [
        workspace / "spec" / "history",
        workspace / "design",
        workspace / "prototype",
        workspace / "build",
        workspace / "logs",
    ]
    for d in dirs_to_create:
        d.mkdir(parents=True, exist_ok=True)

    # --- spec/concept-spec.json ---
    spec = dict(BLANK_SPEC_TEMPLATE)
    spec["id"] = concept_id
    spec["intent"] = {"goal": goal}
    spec_path = workspace / "spec" / "concept-spec.json"
    spec_path.write_text(json.dumps(spec, indent=2) + "\n", encoding="utf-8")

    # --- logs/elicitation.jsonl ---
    (workspace / "logs" / "elicitation.jsonl").touch()

    return workspace


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Create a new concept workspace under workspaces/<concept-id>/.",
    )
    parser.add_argument(
        "--id",
        required=True,
        dest="concept_id",
        metavar="CONCEPT_ID",
        help="Slug identifier for the concept (alphanumeric + hyphens only).",
    )
    parser.add_argument(
        "--goal",
        required=True,
        metavar="GOAL",
        help="High-level design goal for the concept.",
    )
    parser.add_argument(
        "--workspaces-dir",
        default=None,
        metavar="PATH",
        help=(
            "Directory in which to create the workspace. "
            "Defaults to <repo-root>/workspaces/."
        ),
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite an existing workspace with the same concept ID.",
    )
    args = parser.parse_args(argv)

    # Resolve workspaces directory
    workspaces_dir = (
        Path(args.workspaces_dir) if args.workspaces_dir else REPO_ROOT / "workspaces"
    )

    # Validate slug
    try:
        validate_slug(args.concept_id)
    except ValueError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1

    # Create workspace
    try:
        workspace = create_workspace(
            concept_id=args.concept_id,
            goal=args.goal,
            workspaces_dir=workspaces_dir,
            force=args.force,
        )
    except FileExistsError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1
    except OSError as exc:
        print(f"ERROR: Could not create workspace: {exc}", file=sys.stderr)
        return 1

    print(f"Created workspace: {workspace}")
    print()
    print("Layout:")
    print(f"  {workspace / 'spec' / 'concept-spec.json'}  ← draft spec")
    print(f"  {workspace / 'spec' / 'history'}/            ← spec history")
    print(f"  {workspace / 'design'}/                      ← design artefacts")
    print(f"  {workspace / 'prototype'}/                   ← prototype artefacts")
    print(f"  {workspace / 'build'}/                       ← build artefacts")
    print(f"  {workspace / 'logs' / 'elicitation.jsonl'}  ← elicitation log")
    print()
    print("Next: invoke the company-ux-designer skill to begin elicitation.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
