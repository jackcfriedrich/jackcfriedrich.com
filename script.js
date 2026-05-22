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
