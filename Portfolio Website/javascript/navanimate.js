let scrollTimeout = null;

function handleHideShow() {
  const navbar = document.getElementById('navn1');
  
  // Hide the navbar
  navbar.classList.add('hidden');
  
  // Clear any existing timeout
  clearTimeout(scrollTimeout);
  
  // Show navbar again after 300 ms of no "scroll/move" activity
  scrollTimeout = setTimeout(() => {
    navbar.classList.remove('hidden');
  }, 600);
}

// Listen for actual scroll
window.addEventListener('scroll', handleHideShow, { passive: true });
// Also listen for wheel and touchmove (mobile "swipe" might not trigger scroll if no overflow)
window.addEventListener('wheel', handleHideShow, { passive: true });
window.addEventListener('touchmove', handleHideShow, { passive: true });