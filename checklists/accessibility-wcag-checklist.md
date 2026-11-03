# Accessibility Audit Checklist — WCAG 2.2 AA
## Layer 1 — Automated (15 min, run first on every screen)
- [ ] Axe DevTools: 0 Critical/Serious, export rule IDs
- [ ] Lighthouse + WAVE, test mobile 360px too

## Layer 2 — Manual (core, never skip)
- [ ] Full keyboard-only pass: Tab through everything, visible focus (2.4.7), logical focus order (2.4.3), no traps (2.1.2)
- [ ] NVDA/VoiceOver screen reader: landmarks, headings, buttons have accessible names (4.1.2), form errors announced (3.3.1/4.1.3)
- [ ] 200% zoom + 320px reflow: no lost content, no 2D scrolling (1.4.10)
- [ ] Hand-check contrast for text over images (Axe often misses) — body text ≥4.5:1 (1.4.3)
- [ ] Target size ≥24px (2.5.8), respect prefers-reduced-motion

## Layer 3 — AT users (if recruited)
- [ ] 2–3 core tasks with real screen-reader users, log blockers verbatim
- [ ] Re-test after fixes on the exact build: only mark Verified after Axe + manual pass
