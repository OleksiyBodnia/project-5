function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const marqueeContainers = document.querySelectorAll('.marquee__inner');


marqueeContainers.forEach(container => {
    
    const marqueeItems = Array.from(container.children);
    
    const shuffledItems = shuffleArray(marqueeItems);
    
    container.innerHTML = '';
    
    shuffledItems.forEach(item => {
        container.appendChild(item);
    });
});