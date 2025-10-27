document.getElementById('year').textContent = new Date().getFullYear();

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
reveals.forEach(r => observer.observe(r));

// Animación suave al cargar
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, i) => {
    setTimeout(() => el.style.opacity = 1, i * 200);
  });
});

