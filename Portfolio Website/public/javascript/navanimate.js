let lastScrollY = window.scrollY;
const SCROLL_THRESHOLD = 300; // Hide after scrolling 300px

function handleHideShow() {
  const navbar = document.getElementById('navn1');
  const currentScrollY = window.scrollY;
  const scrollDistance = Math.abs(currentScrollY - lastScrollY);
  
  // Update last scroll position
  lastScrollY = currentScrollY;
  
  // Show navbar immediately when scrolling starts
  navbar.classList.remove('hidden');
  
  // Hide navbar if scroll distance exceeds threshold
  if (scrollDistance > SCROLL_THRESHOLD) {
    navbar.classList.add('hidden');
  }
}

// Listen for scroll events
window.addEventListener('scroll', handleHideShow, { passive: true });
window.addEventListener('wheel', handleHideShow, { passive: true });
window.addEventListener('touchmove', handleHideShow, { passive: true });

// Show navbar when scrolling stops
window.addEventListener('scrollend', () => {
  const navbar = document.getElementById('navn1');
  navbar.classList.remove('hidden');
}, { passive: true });