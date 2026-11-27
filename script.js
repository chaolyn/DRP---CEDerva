const REVEAL_THRESHOLD = 0.12;
const REVEAL_DELAY_STEP = 70;
const MAX_DELAY_STEPS = 3;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: REVEAL_THRESHOLD },
);

document.querySelectorAll('.reveal').forEach((element, index) => {
  const delayStep = Math.min(index % 4, MAX_DELAY_STEPS);
  element.style.transitionDelay = `${delayStep * REVEAL_DELAY_STEP}ms`;
  revealObserver.observe(element);
});
