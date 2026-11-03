# Flagship Case Study — Checkout Flow: Usability + Accessibility

## TL;DR (30 seconds)
- **Verdict:** Ship with fixes (R1) → Shipped (R2)
- **Usability R1 (n=6, moderated):** 50% success, 142s median time, SUS 61
- **Usability R2 after fixes (n=6):** 83% success, 88s median time, SUS 79
- **Accessibility:** 14 issues (2 Critical, 5 Serious) → 0 Critical/Serious at ship

## 1. Goal & Research Questions
- Grow checkout conversion. RQs: (1) Can users complete checkout unaided? (2) Where do they hesitate about fees? (3) Do error states (expired voucher) recover gracefully? (4) Any blockers for keyboard / screen-reader users?

## 2. Method
- **Usability:** moderated think-aloud, 45 min/session, 6 users/round (mix of new/returning, mobile 360px + desktop). Frozen Figma prototype v1.2 → v1.3.
- **Accessibility (in parallel):** Axe + Lighthouse + WAVE → full keyboard-only pass → NVDA/VoiceOver → 200% zoom / 320px reflow → 2 AT users.
- **Tasks (goal-based, randomized order):**
  1. "You need headphones under $20 with free shipping. Add them to the cart and go to checkout."
  2. "You have code SAVE20 (expired). Try applying it." (tests error recovery)
  3. "Change the delivery address to your office midway."
- **Metrics:** success (Complete/Partial/Fail), median time, SEQ per task, SUS per session. A11y: count by severity + WCAG failures.

## 3. Metrics R1 → R2
| Task | R1 success | R2 success | R1 median | R2 median | R1 SEQ | R2 SEQ |
|---|---|---|---|---|---|---|
| Add + go to checkout | 67% | 100% | 95s | 60s | 4.1 | 5.8 |
| Apply expired voucher | 33% | 83% | 180s | 75s | 2.4 | 5.0 |
| Change address | 50% | 83% | 142s | 88s | 3.1 | 5.4 |

## 4. Top Findings (Insight → Evidence → Recommendation → Priority)
**P0 — Shipping fee hidden below the fold.** 4/6 users surprised at the final step, 2 abandoned. Quote: "Where did this $5 come from? It wasn't there before." Fix: sticky order summary with the fee always visible. R2: 0 surprises.
**P1 — Vague voucher error.** "Invalid code", 3 users retried 3+ times. Fix: "Code SAVE20 expired on Nov 1. View available codes." + link.
**P1 — Changing address reset the payment method.** Fix: preserve selection + confirm dialog.
**[A11y-Critical] "Apply code" button had no accessible name** (WCAG 4.1.2). VoiceOver announced "button". Fix: added aria-label. Verified with Axe + VO.
**[A11y-Critical] Keyboard trap in the date picker** (WCAG 2.1.2). Fix: roving tabindex + Esc-to-close (per APG pattern). Verified keyboard-only.
**[A11y-Serious] Focus indicator contrast 1.2:1** (WCAG 2.4.7). Fix: 2px outline, contrast ≥3:1.

## 5. A11y Summary
| # | Issue | WCAG | Severity | Status |
|---|---|---|---|---|
| 1 | "Apply code" button missing accessible name | 4.1.2 A | Critical | Fixed + verified |
| 2 | Keyboard trap in date picker | 2.1.2 A | Critical | Fixed + verified |
| 3 | Invisible focus indicator | 2.4.7 AA | Serious | Fixed + verified |
| 4 | Voucher error not announced to SR | 3.3.1 / 4.1.3 | Serious | Fixed + verified |
| 5 | Fee text contrast 3.8:1 | 1.4.3 AA | Serious | Fixed + verified |

## 6. How to tell it in an interview (3 minutes)
"Goal: grow checkout conversion → tested 6 users + WCAG audit → found a hidden shipping fee driving 50% success plus 2 keyboard/SR blockers → minimal fixes → re-test hit 83%, SUS 61→79, 0 Critical a11y → shipped."

## Artifacts
Test plan, SUS raw scores, Axe exports, clip timestamps — use the templates in this repo.
