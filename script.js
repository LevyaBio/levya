// Menu hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // evita que el clic burbujee
    const isOpen = navLinks.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar al hacer clic en un link del menú
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerrar si hacés clic fuera
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
