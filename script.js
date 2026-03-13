// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  formMessage.textContent = `Thanks, ${name}! We'll hit you back soon. ✌️`;
  form.reset();
  setTimeout(() => { formMessage.textContent = ''; }, 5000);
});

// Navbar link smooth-scroll active highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeHref = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === activeHref) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));
