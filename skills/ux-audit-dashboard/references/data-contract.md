# Data contract for UX audit dashboards

Normalize source material into a versioned object with `meta`, `findings`, `evidence`, and optional `checks`/`summary`. Preserve source values and record transformations. This schema is a target shape, not a reason to fabricate missing fields.

## Required metadata

- `schemaVersion`: version string for this dashboard data contract.
- `project`: project or product name, if supplied.
- `sourceScope`: exact scope of the supplied report.
- `sourceFiles[]`: filename, media type, SHA-256 when available, and import timestamp.
- `auditDate`: date or `null` if unknown.
- `generatedAt`: dashboard generation time.
- `limitations[]`: known coverage gaps and caveats.

## Finding record

Each finding should use the following fields where available:

| Field | Meaning |
| --- | --- |
| `id` | Stable source ID; do not invent a source ID without labeling it generated. |
| `title` | Short, factual issue title. |
| `classification` | Confirmed issue, hypothesis, opportunity, or informational note. |
| `status` | FAIL, PASS, NEEDS_VERIFICATION, NOT_TESTED, or NOT_APPLICABLE. |
| `priority` | Source priority or `null`. |
| `severity` | Impact level and the scale/source that defines it. |
| `confidence` | Evidence confidence and its basis. |
| `location` | URL/route, screen, component/control, selector, or coordinates when present. |
| `journey` | User journey and step when present. |
| `environment` | Device, OS, browser, viewport, locale, build/version. Unknown values stay null. |
| `actual` | Observed behavior, kept separate from interpretation. |
| `expected` | Expected behavior and source/standard when available. |
| `reproduction[]` | Repro steps supported by the source. |
| `impact` | User impact supported by evidence; hypotheses explicitly labeled. |
| `evidenceIds[]` | Links to evidence records. |
| `recommendation` | Proposed fix, clearly distinct from completed work. |
| `acceptanceCriteria[]` | Verifiable success conditions. |
| `owner` | Name/team or null. Do not assign an owner by inference. |
| `fixStatus` | Source state or UNKNOWN. |
| `retestStatus` | Source state or NOT_RUN. |
| `sourceRefs[]` | File/page/row/anchor/line references. |

## Evidence record

Represent evidence with `id`, `label`, `kind`, `uri` or relative path, `sourceRef`, `capturedAt`, `build`, `environment`, `sha256`, `redaction`, and `limitations`. Keep unknown fields null. Use relative local paths for portable offline packages. Never embed a secret in a public URL or export.

## Status meanings

- `FAIL`: the named check was performed and failed in the recorded scope.
- `PASS`: the named check was performed and passed in the recorded scope.
- `NEEDS_VERIFICATION`: evidence suggests a concern but is insufficient for a conclusion.
- `NOT_TESTED`: no relevant check was performed.
- `NOT_APPLICABLE`: the check does not apply, with a recorded rationale.

Keep state dimensions independent. A `FAIL` does not itself define severity, priority, confidence, or legal impact.
