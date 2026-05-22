// Dark mode
const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (saved) html.dataset.theme = saved;
else if (prefersDark) html.dataset.theme = 'dark';

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

// Accordion
document.querySelectorAll('.project-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const project = btn.closest('.project');
    const isOpen = project.classList.contains('project--open');
    document.querySelectorAll('.project').forEach(p => p.classList.remove('project--open'));
    if (!isOpen) project.classList.add('project--open');
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.project').classList.remove('project--open');
  });
});
