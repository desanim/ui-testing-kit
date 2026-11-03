# UI Testing Starter Kit — Runnable
> For roles: UX Tester / UI Tester / Accessibility Tester (Usability + WCAG 2.2 AA)
> Clone it, run it: `npm install && npx playwright install chromium && npm test` — 9 tests green.

## Run it (60 seconds)
```bash
npm install
npx playwright install chromium
npm test            # all 9 tests (usability + a11y)
npm run test:a11y   # Axe WCAG 2.2 AA + keyboard tests only
npm run start       # demo app alone at http://localhost:8080
```

## What's inside
| Path | What it proves |
|---|---|
| `demo/` | Test target: checkout app, R2 fixed build (each fix guards an R1 finding) |
| `tests/checkout.spec.ts` | Usability-as-code: 3 tasks from the test plan as assertions |
| `tests/a11y.spec.ts` | Axe WCAG 2.2 AA gate (0 Critical/Serious) + keyboard-trap + accessible-name tests |
| `case-study/README.md` | Flagship case: R1 50%/SUS 61 → R2 83%/SUS 79, 14 a11y issues → 0 Critical |
| `checklists/` | In-session usability + WCAG 2.2 AA audit checklists |
| `templates/` | 1-page test plan + a11y bug report templates |

## How to use when applying
- Link this repo on your CV / LinkedIn under "Portfolio".
- In interviews: `npm test` live, then tell the case in 3 min: Goal → Method → Top numbered finding → Fix → Re-test.
- For take-home tests: copy `templates/test-plan-1pager.md` + `checklists/` and use them directly.

## Skills demonstrated
Usability (moderated, SEQ/SUS, success rate) · Accessibility (Axe, keyboard-only, NVDA/VoiceOver, WCAG 2.2 AA) · Test automation (Playwright + axe-core, 9/9 passing)
