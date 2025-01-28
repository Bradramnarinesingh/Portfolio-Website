function adjustFontSize() {
    const nameDiv = document.getElementById("name");
    const minFontSize = 12; // Minimum font size in pixels
    let maxFontSize = 35; // Default maximum font size
    let fontSize = maxFontSize;

    // Check if the device width is less than or equal to 768px (common breakpoint for mobile)
    if (window.innerWidth <= 1200) {
        maxFontSize = 30; // Maximum font size for mobile
    }

    // Set initial font size to the determined maximum
    fontSize = maxFontSize;
    nameDiv.style.fontSize = fontSize + "px";

    // Reduce font size until the text fits
    while (
        (nameDiv.scrollWidth > nameDiv.offsetWidth ||
            nameDiv.scrollHeight > nameDiv.offsetHeight) &&
        fontSize > minFontSize
    ) {
        fontSize--;
        nameDiv.style.fontSize = fontSize + "px";
    }
}

// Initial adjustment
window.onload = adjustFontSize;

// Adjust font size on window resize
window.addEventListener("resize", adjustFontSize);
