// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

// Minimal: no smooth scrolling, no reveal animations, no back-to-top

// Footer year
document.getElementById('year').textContent = new Date().getFullYear().toString();

// Contact form validation (simple, no animations)
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = /** @type {HTMLInputElement} */ (document.getElementById('name'));
  const email = /** @type {HTMLInputElement} */ (document.getElementById('email'));
  const message = /** @type {HTMLTextAreaElement} */ (document.getElementById('message'));

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formSuccess = document.getElementById('formSuccess');

  let valid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.textContent = '';

  if (!name.value.trim()) { nameError.textContent = 'Please enter your name'; valid = false; }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) { emailError.textContent = 'Enter a valid email'; valid = false; }
  if (message.value.trim().length < 10) { messageError.textContent = 'Message should be at least 10 characters'; valid = false; }

  if (!valid) return;

  // Mock submit
  formSuccess.textContent = 'Thanks! Your message has been sent.';
  form.reset();
});


