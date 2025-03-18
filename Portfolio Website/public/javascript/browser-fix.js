// Safari fix with stronger overrides
document.addEventListener('DOMContentLoaded', function() {
  // Detect Safari or Mac browser
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  
  if (isSafari || isMac) {
    const leftHalf = document.querySelector('.left-half');
    if (leftHalf) {
      // Apply stronger inline styles with !important
      leftHalf.setAttribute('style', 
        'position: fixed !important;' +
        'display: flex !important;' +
        'flex-direction: column !important;' +
        'transform: translateZ(0) !important;' +
        '-webkit-transform: translateZ(0) !important;'
      );
      
      // Special handling for mobile view
      function updateMobileStyles() {
        if (window.innerWidth <= 900) {
          leftHalf.setAttribute('style', 
            'position: relative !important;' +
            'display: flex !important;' +
            'flex-direction: column !important;' +
            'width: 100% !important;' +
            'margin-left: 0 !important;' +
            'height: auto !important;'
          );
        } else {
          leftHalf.setAttribute('style', 
            'position: fixed !important;' +
            'display: flex !important;' +
            'flex-direction: column !important;' +
            'transform: translateZ(0) !important;' +
            '-webkit-transform: translateZ(0) !important;'
          );
        }
      }
      
      // Initial call and resize listener
      updateMobileStyles();
      window.addEventListener('resize', updateMobileStyles);
    }
  }
}); 