function toggleTheme(theme) {
    const heroSection = document.querySelector('.hero-section');
    const selectedSpan = document.querySelector('.color .active');
    selectedSpan.classList.remove('active');
    const newActiveSpan = document.querySelector(`.color .${theme}`);
    newActiveSpan.classList.add('active');

    // Сохраняем текущее значение background и background-image
    const currentBackground = heroSection.style.background;
    const currentBackgroundImage = heroSection.style.backgroundImage;

    // Устанавливаем новые значения для темы
    heroSection.style.setProperty('--main-color', getComputedStyle(newActiveSpan).getPropertyValue('--main-color'));
    heroSection.setAttribute('data-theme', theme);
    heroSection.style.backgroundImage = newActiveSpan.style.backgroundImage;

    // Восстанавливаем сохраненные значения background и background-image
    heroSection.style.background = currentBackground;
    heroSection.style.backgroundImage = currentBackgroundImage;
}
