// Подсветка текущей ссылки навигации
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a[data-link]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (window.location.pathname.endsWith(href)) {
      link.classList.add('active');
    }
  });
});
