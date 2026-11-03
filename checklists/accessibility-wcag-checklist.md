# Accessibility Audit Checklist — WCAG 2.2 AA
## Lớp 1 — Automated (15p, chạy đầu tiên mọi màn)
- [ ] Axe DevTools: 0 Critical/Serious, export rule ID
- [ ] Lighthouse + WAVE, test cả mobile 360px

## Lớp 2 — Manual (core, không skip)
- [ ] Keyboard-only full flow: Tab hết, focus visible (2.4.7), focus order logic (2.4.3), không trap (2.1.2)
- [ ] Screen reader NVDA/VoiceOver: landmarks, heading, button có accessible name (4.1.2), lỗi form được announced (3.3.1/4.1.3)
- [ ] Zoom 200% + reflow 320px: không mất nội dung, không scroll 2 chiều (1.4.10)
- [ ] Contrast text trên ảnh check tay (Axe hay miss) — text thường ≥4.5:1 (1.4.3)
- [ ] Target size ≥24px (2.5.8), tôn trọng prefers-reduced-motion

## Lớp 3 — AT users (nếu recruit được)
- [ ] 2-3 tasks core bằng screen reader thật, log blocker nguyên văn
- [ ] Re-test sau fix trên đúng build: pass Axe + manual mới mark Verified
