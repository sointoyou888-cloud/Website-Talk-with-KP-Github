// Main JavaScript file for Obelisk Development website
// Add any custom JavaScript functionality here

console.log('Obelisk Development website loaded successfully!');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for navigation links when clicking buttons
document.querySelectorAll('button').forEach(button => {
    if (button.getAttribute('href')) {
        button.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetElement = document.querySelector(href);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
});