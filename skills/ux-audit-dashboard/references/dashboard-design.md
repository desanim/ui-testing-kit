# Dashboard design contract

## Information architecture

1. **Overview:** source scope, date/version, counts by explicit status, and visible coverage/limitations. Do not convert counts into an overall UX score.
2. **Findings:** searchable and filterable records. Show ID, title, route/control, status, priority/severity, confidence, and retest state.
3. **Finding detail:** actual/expected, reproduction, user impact, environment/build, source criterion, evidence, recommendation, acceptance criteria, owner, fix and retest states.
4. **Evidence:** openable screenshots/logs/documents with provenance and masking notes.
5. **Remediation:** proposed fix → acceptance → retest, with statuses kept distinct and immutable unless an authorized editing workflow exists.
6. **Sources and limits:** report inputs, hashes where available, assumptions, untested scope, and update model.

## Location and evidence

For a location-aware finding, display as much of the following as the source supports: URL/route, journey and step, state, control/selector, device/browser/viewport, build, actual/expected, and reproduction. Link to evidence. Only show annotated screenshots or coordinate overlays when those artifacts exist; do not imply a pin or geometry from a textual reference alone.

## Interaction and accessibility

- Use semantic HTML landmarks, headings, buttons, links, tables, and dialogs appropriately.
- Give every control a programmatic name; show keyboard focus; support keyboard operation and Escape for dialogs.
- Do not use color alone for status; include text labels and icon meaning where useful.
- Ensure responsive reflow and usable touch targets; support reduced motion.
- Escape untrusted source text before rendering it as HTML. Validate schemes for links and block unsafe URL protocols.
- Preserve focus when filters, routes, or dialogs change. Provide empty states and clear filter reset.

## Export and privacy

- Export the same scoped records shown in the dashboard and retain evidence/source references.
- CSV values beginning with spreadsheet formula characters must be escaped or prefixed safely.
- Do not expose PII, credentials, private URLs, or unredacted screenshots without authorization.
- A local HTML file has no authentication. A hosted site must have an explicit audience and access model.
- No analytics, heatmap, replay, external API, or auto-sync should be implied unless actually implemented and authorized.
