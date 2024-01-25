const scrollingElement = document.querySelector('.scrolling-element');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Adjust these values to control the animation's timing
    const animationStart = 200; // Start the animation when this many pixels have been scrolled
    const animationEnd = 400; // End the animation when this many pixels have been scrolled

    if (scrollPosition >= animationStart && scrollPosition <= animationEnd) {
        const progress = (scrollPosition - animationStart) / (animationEnd - animationStart);
        const scale = Math.min(1, 0.5 + progress * 1.5);

        scrollingElement.style.transform = `translate(-50%, -50%) scale(${scale})`;
        scrollingElement.style.opacity = progress;
    }
});
