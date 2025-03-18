// Safari fix with minimal changes
document.addEventListener('DOMContentLoaded', function() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
  if (isSafari) {
    const leftHalf = document.querySelector('.left-half');
    
    if (leftHalf) {
      // Add minimal Safari fix without changing layout
      leftHalf.style.transform = 'translateZ(0)';
      
      // On mobile, ensure position is correct
      if (window.innerWidth <= 900) {
        leftHalf.style.position = 'relative';
        leftHalf.style.width = '100%';
      } else {
        leftHalf.style.position = 'fixed';
      }
    }
    
    // Listen for resize events
    window.addEventListener('resize', function() {
      if (window.innerWidth <= 900) {
        leftHalf.style.position = 'relative';
        leftHalf.style.width = '100%';
      } else {
        leftHalf.style.position = 'fixed';
      }
    });
  }
}); 