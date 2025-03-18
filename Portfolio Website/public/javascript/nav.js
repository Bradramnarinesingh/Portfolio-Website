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

// Add click event listeners to all navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target section id from the href
            const targetId = this.getAttribute('href').substring(1);
            
            // Find the corresponding heading
            const heading = document.querySelector(`.heading#${targetId}`);
            
            if (heading) {
                // Remove any existing highlight class
                heading.classList.remove('highlight');
                
                // Force a reflow to ensure the animation plays again
                void heading.offsetWidth;
                
                // Add the highlight class
                heading.classList.add('highlight');
                
                // Remove the highlight class after 1.5 seconds
                setTimeout(() => {
                    heading.classList.remove('highlight');
                    heading.style.transform = 'scale(1)';
                }, 1500);
            }
        });
    });
});


