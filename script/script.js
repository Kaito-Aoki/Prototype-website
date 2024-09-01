// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            console.log(`Scrolling to ${targetId}`);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error(`Element with ID ${targetId} not found.`);
        }
    });
});

// Animate sections on scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
        rect.top <= windowHeight * 0.75 && // Element's top is in the bottom 75% of the viewport
        rect.bottom >= windowHeight * 0.25 // Element's bottom is in the top 75% of the viewport
    );
}

function animateOnScroll() {
    document.querySelectorAll('.text-block, .image-block, .map-section').forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
}

// Initial check on page load
window.addEventListener('load', animateOnScroll);

// Check on scroll
window.addEventListener('scroll', animateOnScroll);

// Check on resize (for responsiveness)
window.addEventListener('resize', animateOnScroll);