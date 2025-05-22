// Scroll to top button functionality
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  highlightActiveLink(); // Call on scroll to update nav link highlight
  revealOnScroll();      // Call on scroll to trigger animations
};

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Add class to <body> if JavaScript is enabled
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("js-enabled");
  highlightActiveLink();
  revealOnScroll();
});

// Active nav link highlight
function highlightActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY || document.documentElement.scrollTop;

  sections.forEach(section => {
    const id = section.getAttribute("id");
    const offsetTop = section.offsetTop - 80;
    const offsetHeight = section.offsetHeight;

    const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (navLink) {
      if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}

// Scroll animation reveal
function revealOnScroll() {
  const animatedElements = document.querySelectorAll(
    ".hero-text, .hero-img img, .about p, .skill-column, .job-entry, .project-block"
  );

  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.85;

    if (rect.top <= triggerPoint) {
      el.classList.add("appear");
    }
  });
}
