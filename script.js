// Menu hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Switch founders/advisors
function showPanel(panelId, btn) {
  document.querySelectorAll('.team-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  document.getElementById(panelId).classList.add('active');
  btn.classList.add('active');
}
