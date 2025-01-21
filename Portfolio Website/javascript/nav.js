document.addEventListener("DOMContentLoaded", (event) => {
    const navLinks = document.querySelectorAll("#navn1 a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            // Remove active class from all nav items
            navLinks.forEach((node) => {
                node.classList.remove("active-nav-item");
                node.classList.add("minimized");
            });

            // Add active class to clicked nav item
            this.classList.add("active-nav-item");
            this.classList.remove("minimized");
        });
    });
});


