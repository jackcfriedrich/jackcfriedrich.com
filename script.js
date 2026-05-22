// ── Dark mode — defaults to light unless user has explicitly toggled ──
const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Only restore if the user has previously made a choice
const saved = localStorage.getItem('theme');
if (saved) html.dataset.theme = saved;
// No system-preference detection — light is the default

updateLabel();

toggle.addEventListener('click', () => {
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', html.dataset.theme);
  updateLabel();
});

function updateLabel() {
  const isDark = html.dataset.theme === 'dark';
  toggle.textContent = isDark ? '☀' : '◑';
  toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// ── Modals ──
const backdrop = document.getElementById('modal-backdrop');

document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    openModal('modal-' + btn.dataset.modal);
  });
});

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', closeAll);
});

backdrop.addEventListener('click', closeAll);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAll();
});

function openModal(id) {
  closeAll();
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('active');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
}

function closeAll() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
  backdrop.classList.remove('active');
  document.body.style.overflow = '';
}
