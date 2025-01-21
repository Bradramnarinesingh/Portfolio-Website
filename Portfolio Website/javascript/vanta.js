
document.addEventListener("DOMContentLoaded", function () {
// Function to initialize VANTA.FOG with specific settings
function initVanta() {
    // Destroy existing VANTA instance if any to prevent duplicates
    if (window.vantaEffect) {
    window.vantaEffect.destroy();
    }

    // Define media queries
    const highDensityLargeScreen = window.matchMedia(
    "screen and (min-width: 900px) and (max-width: 2500px) " +
    "and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)"
    );

    const smallScreen = window.matchMedia(
    "screen and (max-width: 1000px)"
    );

    // Determine which settings to apply based on screen size
    let vantaSettings;

    if (highDensityLargeScreen.matches) {
    // Settings for high-density large screens
    vantaSettings = {
        el: "#animated-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xb1a55,
        midtoneColor: 0xc2341,
        lowlightColor: 0x71c34,
        baseColor: 0x9112f,
        blurFactor: 0.90,
        zoom: 0.30
    };
    } else if (smallScreen.matches) {
    // Settings for screens 1000px and below
    vantaSettings = {
        el: "#animated-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xb1a55,
        midtoneColor: 0xc2341,
        lowlightColor: 0x71c34,
        baseColor: 0x9112f,
        blurFactor: 0.9,
        zoom: 0.3              // Custom value for small screens
    };
    } else {
    // Default settings for all other screen sizes
    vantaSettings = {
        el: "#animated-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xb1a55,
        midtoneColor: 0xc2341,
        lowlightColor: 0x71c34,
        baseColor: 0x9112f,
        blurFactor: 0.90,
        zoom: 1             // Default zoom
    };
    }

    // Initialize VANTA.FOG with the selected settings
    window.vantaEffect = VANTA.FOG(vantaSettings);
}

// Initialize on load
initVanta();

// Optional: Re-initialize on window resize to handle dynamic changes
// Debounce to improve performance
let resizeTimeout;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
    initVanta();
    }, 300); // Adjust timeout as needed
});
});
