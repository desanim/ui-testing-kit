// Demo checkout logic — the R2 FIXED build. Every behavior below is a regression
// guard for an R1 finding (see case-study/README.md).
document.getElementById('add-to-cart').addEventListener('click', () => {
  document.getElementById('step-product').hidden = true;
  document.getElementById('step-checkout').hidden = false;
  document.getElementById('h-checkout').setAttribute('tabindex', '-1');
  document.getElementById('h-checkout').focus();
});

// R1 P1 fix: expired voucher gets a specific message + next step, announced via role=alert.
document.getElementById('apply-voucher').addEventListener('click', () => {
  const msg = document.getElementById('voucher-msg');
  msg.textContent = 'Code SAVE20 expired on Nov 1. View available codes.';
});

// R1 P1 fix: changing address preserves the payment selection.
document.getElementById('address').addEventListener('change', () => {
  // intentionally no reset of the payment radio group
});

// Accessible date picker: Esc closes and returns focus (no keyboard trap, WCAG 2.1.2).
const dateInput = document.getElementById('date');
const picker = document.getElementById('datepicker');
dateInput.addEventListener('focus', () => {
  picker.hidden = false;
  dateInput.setAttribute('aria-expanded', 'true');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !picker.hidden) {
    picker.hidden = true;
    dateInput.setAttribute('aria-expanded', 'false');
    dateInput.focus();
  }
});
picker.querySelectorAll('button').forEach((b) =>
  b.addEventListener('click', () => {
    dateInput.textContent = 'Delivery: ' + b.dataset.day;
    picker.hidden = true;
    dateInput.setAttribute('aria-expanded', 'false');
    dateInput.focus();
  })
);

document.getElementById('place-order').addEventListener('click', () => {
  document.getElementById('step-checkout').hidden = true;
  const done = document.getElementById('step-done');
  done.hidden = false;
  document.getElementById('done-msg').textContent = 'Total charged: $24.99. Thank you!';
  document.getElementById('h-done').focus();
});
