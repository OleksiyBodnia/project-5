document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const colorOptions = document.querySelectorAll('.color span');

    colorOptions.forEach(span => {
        span.addEventListener('click', function() {
            const theme = this.classList[0]; // Получаем класс первого элемента span (theme)
            const selectedSpan = document.querySelector('.color .active');
            selectedSpan.classList.remove('active');
            this.classList.add('active');

            // Сохраняем текущее значение background и background-image
            const currentBackground = heroSection.style.background;
            const currentBackgroundImage = heroSection.style.backgroundImage;

            // Устанавливаем новые значения для темы
            heroSection.style.setProperty('--main-color', getComputedStyle(this).getPropertyValue('--main-color'));
            heroSection.setAttribute('data-theme', theme);
            heroSection.style.backgroundImage = getComputedStyle(this).backgroundImage;

            // Восстанавливаем сохраненные значения background и background-image
            heroSection.style.background = currentBackground;
            heroSection.style.backgroundImage = currentBackgroundImage;
        });
    });
});
