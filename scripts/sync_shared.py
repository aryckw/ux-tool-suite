"""
sync_shared.py — Propagate shared/ resources into each skill bundle.

Usage:
    python scripts/sync_shared.py [--dry-run] [--skill SKILL_NAME]

Syncs the following into each skills/<skill>/ directory:
    shared/schemas/        → skills/<skill>/references/schemas/
    shared/elicitation/    → skills/<skill>/references/elicitation/
    shared/docs/           → skills/<skill>/references/docs/
    shared/lib/ux_suite/   → skills/<skill>/scripts/ux_suite/
"""

from __future__ import annotations

import argparse
import shutil
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent

ALL_SKILLS = [
    "company-ux-designer",
    "company-ux-prototyper",
    "company-ux-builder",
]

# (source relative to repo root, destination relative to skills/<skill>/)
SYNC_TARGETS: list[tuple[str, str]] = [
    ("shared/schemas",      "references/schemas"),
    ("shared/elicitation",  "references/elicitation"),
    ("shared/docs",         "references/docs"),
    ("shared/lib/ux_suite", "scripts/ux_suite"),
]


def count_files(path: Path) -> int:
    """Return the number of files under *path* (recursively)."""
    if not path.exists():
        return 0
    return sum(1 for p in path.rglob("*") if p.is_file())


def sync_skill(skill: str, dry_run: bool) -> bool:
    """
    Sync all shared resources into a single skill directory.

    Returns True on success, False if any source directory is missing.
    """
    skill_dir = REPO_ROOT / "skills" / skill
    if not skill_dir.is_dir():
        print(f"  ERROR: skill directory not found: {skill_dir}", file=sys.stderr)
        return False

    ok = True
    for src_rel, dst_rel in SYNC_TARGETS:
        src = REPO_ROOT / src_rel
        dst = skill_dir / dst_rel

        if not src.is_dir():
            print(
                f"  WARNING: source directory missing, skipping: {src}",
                file=sys.stderr,
            )
            ok = False
            continue

        file_count = count_files(src)
        label = "Would copy" if dry_run else "Copying"
        print(f"  {label}: {src.relative_to(REPO_ROOT)} → {dst.relative_to(REPO_ROOT)}  ({file_count} file(s))")

        if not dry_run:
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copytree(src, dst, dirs_exist_ok=True)

    return ok


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Propagate shared/ resources into each skill bundle.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print what would be copied without making any changes.",
    )
    parser.add_argument(
        "--skill",
        choices=ALL_SKILLS,
        metavar="SKILL_NAME",
        help=(
            "Sync only this skill "
            f"(one of: {', '.join(ALL_SKILLS)}). "
            "Defaults to all three."
        ),
    )
    args = parser.parse_args(argv)

    skills_to_sync = [args.skill] if args.skill else ALL_SKILLS

    if args.dry_run:
        print("DRY RUN — no files will be written.\n")

    all_ok = True
    for skill in skills_to_sync:
        print(f"[{skill}]")
        success = sync_skill(skill, dry_run=args.dry_run)
        if not success:
            all_ok = False
        print()

    if all_ok:
        action = "Would sync" if args.dry_run else "Synced"
        print(f"{action} {len(skills_to_sync)} skill(s) successfully.")
        return 0
    else:
        print("Completed with errors — see warnings above.", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
