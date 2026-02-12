document.addEventListener('DOMContentLoaded', () => {
  // Use a higher threshold so images are mostly visible before triggering
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4 // Trigger when 40% visible (safe for tall images)
  };

  const observer = new IntersectionObserver((entries, observer) => {
    // Sort entries by their position in the DOM to ensure correct left-to-right staggering
    const visibleEntries = entries.filter(entry => entry.isIntersecting);
    
    // Sort based on vertical position (top) to handle staggering naturally
    visibleEntries.sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

    visibleEntries.forEach((entry, index) => {
        // Add a delay based on the index in this batch
        // The first image (index 0) gets 0ms delay
        // The second image (index 1) gets 200ms delay, etc.
        setTimeout(() => {
            entry.target.classList.add('visible');
        }, index * 200);
        
        observer.unobserve(entry.target);
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
});
