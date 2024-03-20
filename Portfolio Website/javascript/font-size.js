function adjustFontSize() {
    const nameDiv = document.getElementById("name");
    let minFontSize = 12; // Minimum font size in pixels
    let maxFontSize = 35; // Maximum font size in pixels, start big
    let fontSize = maxFontSize;

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