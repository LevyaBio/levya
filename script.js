// ===== NAV: Menú hamburguesa =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  // Abrir / cerrar menú
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar al hacer clic en un enlace del menú
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerrar al hacer clic fuera del menú y del botón
  document.addEventListener('click', (e) => {
    const clickedOutside = !navLinks.contains(e.target) && !menuToggle.contains(e.target);
    if (clickedOutside && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
}

// ===== TEAM: Tabs Founders / Advisors =====
function showPanel(panelId, btn) {
  // Ocultar todos los paneles
  document.querySelectorAll('.team-panel').forEach((panel) => {
    panel.classList.remove('active');
  });

  // Desactivar todos los botones
  document.querySelectorAll('.tab-button').forEach((b) => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });

  // Activar panel solicitado
  const target = document.getElementById(panelId);
  if (target) target.classList.add('active');

  // Activar botón actual
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
  }
}

// Hacer disponible la función para los onClick del HTML
window.showPanel = showPanel;
