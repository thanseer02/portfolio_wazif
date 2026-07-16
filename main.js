document.addEventListener('DOMContentLoaded', () => {
  const ticks = document.querySelectorAll('.tick');
  const sections = document.querySelectorAll('section, .exp-wrapper, .projects-wrapper');

  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (!id) return;

        ticks.forEach(tick => {
          if (tick.dataset.target === id) {
            tick.classList.add('active');
          } else {
            tick.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => {
    if (sec.id) observer.observe(sec);
  });
});
