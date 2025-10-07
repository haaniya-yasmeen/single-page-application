function switchView(viewId) {
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');

  document.querySelectorAll('nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-view') === viewId);
  });
}

document.querySelectorAll('[data-view]').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const viewId = this.getAttribute('data-view');
    switchView(viewId);
  });
});
