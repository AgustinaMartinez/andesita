function observeIntersection(
  elementId,
  animationClass = 'scroll-animation'
) {
  const element = document.getElementById(elementId);

  if (element) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );
    observer.observe(element);
  }
};