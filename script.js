// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Smooth active nav highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function onScroll() {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });

// Contact form submission handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'please fill in all fields.';
      formStatus.style.color = '#ff6b6b';
      return;
    }

    // Simulate a successful submission
    formStatus.textContent = `thanks, ${name}! message received. ✌️`;
    formStatus.style.color = 'var(--accent)';
    contactForm.reset();
  });
}

// Fade-in animation on scroll for cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.card').forEach((card) => {
  card.classList.add('fade-in');
  observer.observe(card);
});
