# Case Study Flagship — Checkout Flow: Usability + Accessibility

## TL;DR (đọc 30 giây)
- **Verdict:** Ship with fixes (R1) → Shipped (R2)
- **Usability R1 (n=6, moderated):** success 50%, median time 142s, SUS 61
- **Usability R2 sau fix (n=6):** success 83%, median time 88s, SUS 79
- **Accessibility:** 14 issues (2 Critical, 5 Serious) → 0 Critical/Serious ở build ship

## 1. Goal & Research Questions
- Tăng checkout conversion. RQ: (1) User có hoàn tất checkout không cần giúp? (2) Điểm do dự về phí ở đâu? (3) Error state (voucher hết hạn) có recover được? (4) Có blocker nào cho keyboard / screen-reader user?

## 2. Method
- **Usability:** moderated think-aloud, 45p/session, 6 users/round (mix new/returning, mobile 360px + desktop). Prototype Figma frozen v1.2 → v1.3.
- **Accessibility (song song):** Axe + Lighthouse + WAVE → keyboard-only full pass → NVDA/VoiceOver → zoom 200% / reflow 320px → 2 AT users.
- **Tasks (goal-based, randomize thứ tự):**
  1. "Cần mua tai nghe dưới 500k có freeship. Thêm vào giỏ và đi đến thanh toán."
  2. "Có mã GIAM20 (đã hết hạn). Hãy thử áp dụng." (test error recovery)
  3. "Đổi địa chỉ giao hàng sang địa chỉ công ty giữa chừng."
- **Metrics:** success (Complete/Partial/Fail), median time, SEQ/task, SUS/session. A11y: count theo severity + WCAG fail.

## 3. Metrics R1 → R2
| Task | R1 success | R2 success | R1 median | R2 median | R1 SEQ | R2 SEQ |
|---|---|---|---|---|---|---|
| Add + go checkout | 67% | 100% | 95s | 60s | 4.1 | 5.8 |
| Apply expired voucher | 33% | 83% | 180s | 75s | 2.4 | 5.0 |
| Change address | 50% | 83% | 142s | 88s | 3.1 | 5.4 |

## 4. Top Findings (Insight → Evidence → Recommendation → Priority)
**P0 — Phí ship ẩn dưới fold.** 4/6 users bất ngờ ở bước cuối, 2 abandon. Quote: "Ủa sao thêm 35k? Hồi nãy đâu có." Fix: sticky order summary, dòng phí luôn visible. R2: 0 surprise.
**P1 — Lỗi voucher chung chung.** "Mã không hợp lệ", 3 users thử lại 3+ lần. Fix: "Mã GIAM20 hết hạn 01/11. Xem mã khả dụng." + link.
**P1 — Đổi địa chỉ reset phương thức thanh toán.** Fix: giữ selection + confirm dialog.
**[A11y-Critical] Nút "Áp mã" không có accessible name** (WCAG 4.1.2). VoiceOver đọc "button". Fix: thêm aria-label. Verified Axe + VO.
**[A11y-Critical] Keyboard trap trong date picker** (WCAG 2.1.2). Fix: roving tabindex + Esc-to-close (theo APG pattern). Verified keyboard-only.
**[A11y-Serious] Focus indicator tương phản 1.2:1** (WCAG 2.4.7). Fix: outline 2px, contrast ≥3:1.

## 5. A11y Summary
| # | Issue | WCAG | Severity | Status |
|---|---|---|---|---|
| 1 | Nút "Áp mã" thiếu accessible name | 4.1.2 A | Critical | Fixed + verified |
| 2 | Keyboard trap date picker | 2.1.2 A | Critical | Fixed + verified |
| 3 | Focus indicator mờ | 2.4.7 AA | Serious | Fixed + verified |
| 4 | Lỗi voucher không announced tới SR | 3.3.1 / 4.1.3 | Serious | Fixed + verified |
| 5 | Text phí ship contrast 3.8:1 | 1.4.3 AA | Serious | Fixed + verified |

## 6. How to retell in interview (3 phút)
"Goal tăng conversion checkout → test 6 users + audit WCAG → phát hiện phí ship ẩn làm success chỉ 50% và 2 blocker keyboard/SR → fix tối thiểu → re-test lên 83%, SUS 61→79, 0 Critical a11y → ship."

## Artifacts
Test plan, SUS raw, Axe exports, clip timestamps — dùng templates trong repo này.
