// A timer to track when scrolling stops
let scrollTimeout = null;

// Listen to the window scroll event
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navn1');

  // Hide the navbar immediately on scroll
  if (!navbar.classList.contains('hidden')) {
    navbar.classList.add('hidden');
  }

  // Clear any existing scroll timeout
  clearTimeout(scrollTimeout);

  // Set a new scroll timeout to show navbar when scroll ends
  scrollTimeout = setTimeout(() => {
    // Show the navbar again after 300 ms of no scrolling
    navbar.classList.remove('hidden');
  }, 300);
});
