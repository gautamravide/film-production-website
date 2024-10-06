// Hamburger menu toggle for mobile
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

// Scroll-triggered animations for services and portfolio
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.card, .portfolio-item');
    elements.forEach(item => {
        const position = item.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
});
