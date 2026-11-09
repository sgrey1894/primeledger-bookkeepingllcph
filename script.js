const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const BUSINESS_EMAIL = 'primeledger.bkservices@gmail.com';
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Bookkeeping inquiry - ' + form.get('name'));
  const body = encodeURIComponent(
    'Name: ' + form.get('name') + '\n' +
    'Email: ' + form.get('email') + '\n' +
    'Business: ' + (form.get('business') || 'Not provided') + '\n\n' +
    form.get('message')
  );
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
