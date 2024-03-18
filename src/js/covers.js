function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("scroll", function() {
    const coversSection = document.querySelector('.covers-section');
    const marqueeContainers = document.querySelectorAll('.marquee__inner');

    if (isElementInViewport(coversSection)) {
        marqueeContainers.forEach(container => {
            const marqueeItems = Array.from(container.children);
            const shuffledItems = shuffleArray(marqueeItems);
            container.innerHTML = '';
            shuffledItems.forEach(item => {
                container.appendChild(item);
            });
        });
    }
});
