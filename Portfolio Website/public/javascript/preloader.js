window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("preloader-finish");
    }, 300); // Show black screen for 0.25s, then transition
});
