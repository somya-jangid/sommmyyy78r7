document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const ctaButton = document.querySelector('.cta-button');
    const aboutSection = document.querySelector('.about');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
         // Toggle hamburger icon animation
        this.classList.toggle('open');

        // Basic hamburger icon animation
        this.children[0].classList.toggle('rotate-45');
        this.children[1].classList.toggle('hide');
        this.children[2].classList.toggle('rotate-minus-45');
    });

    if (ctaButton) {
        ctaButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Close the mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) { // Check if it's mobile view
                navLinks.classList.remove('show');
                hamburger.classList.remove('open');
                hamburger.children[0].classList.remove('rotate-45');
                hamburger.children[1].classList.remove('hide');
                hamburger.children[2].classList.remove('rotate-minus-45');
            }
        });
    });
});