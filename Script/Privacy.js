document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.privacy-principle');
  const observer = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }
  }, { threshold: 0.2 });

  items.forEach(item => {
    item.classList.add('fade-item');
    observer.observe(item);
  });
});