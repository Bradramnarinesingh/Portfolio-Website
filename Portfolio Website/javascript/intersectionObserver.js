document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1, // Adjust this value based on when you want the animation to start
        }
    );

    const contentElements = document.querySelectorAll(".contentstyle, .heading, html, body, .summary, .right-side-content, .content, #social, #navn1");
    contentElements.forEach((el) => observer.observe(el));
});