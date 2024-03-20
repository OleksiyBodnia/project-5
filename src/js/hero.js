document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const colorOptions = document.querySelectorAll('.color span');
    const headerMobMenu = document.querySelector('.mobile-menu-header');
    const covers = document.querySelector('.covers');

    const colors = [
        { // Для першого спана
            main: '#ED3B44',
            hover: '#E0373F',
            headerBackground: "url('./img/mobil/bg/m-hero.png') top left / cover no-repeat",
            coverBackground: "url('./img/mobil/bg/m-covers.png')"
        },
        { // Для другого спана
            main: '#C6E327',
            hover: 'rgba(198, 227, 39, 0.8)',
            headerBackground: "linear-gradient(90deg, #1C1D20 49.69%, #596808 67.71%, rgba(198, 227, 39) 99.91%)",
            coverBackground: "none"
        },
        { // Для третього спана
            main: '#0041E8',
            hover: 'rgba(0, 65, 232, 0.8)',
            headerBackground: "linear-gradient(90deg, #1C1C20 49.69%, #001958 67.71%, #0041E8 99.91%)",
            coverBackground: "none"
        },
        { // Для четвертого спана
            main: '#E6533C',
            hover: 'rgba(230, 83, 60, 0.8)',
            headerBackground: "linear-gradient(90deg, #1C1D20 49.69%, #9F3626 67.71%, #E6533C 99.91%)",
            coverBackground: "none"
        },
        { // Для п'ятого спана
            main: '#2B4441',
            hover: 'rgba(43, 68, 65, 0.8)',
            headerBackground: "linear-gradient(90deg, #1C1D20 49.69%, #1E3633 67.71%, #2B4441 99.91%)",
            coverBackground: "none"
        },
        { // Для шостого спана
            main: '#FF7F08',
            hover: 'rgba(255, 127, 8, 0.8)',
            headerBackground: "linear-gradient(90deg, #1C1D20 49.69%, #AC5300 67.71%, #FF7F08 99.91%, #FF7F08 99.91%)",
            coverBackground: "none"
        }
    ];

    colorOptions.forEach((span, index) => {
        span.addEventListener('click', function() {
            if (index === 0) {
                covers.style.backgroundImage = colors[index].coverBackground;
            } else {
                covers.style.backgroundImage = "none";
            }

            document.documentElement.style.setProperty('--red', colors[index].main);
            document.documentElement.style.setProperty('--red-hover', colors[index].hover);
            headerMobMenu.style.backgroundImage = colors[index].headerBackground;

            colorOptions.forEach(span => span.classList.remove('active'));
            this.classList.add('active');

            const theme = this.classList[0]; // Отримуємо клас першого елемента span (theme)
            const selectedSpan = document.querySelector('.color .active');
            selectedSpan.classList.remove('active');
            this.classList.add('active');

            // Зберігаємо поточне значення background та background-image
            const currentBackground = heroSection.style.background;
            const currentBackgroundImage = heroSection.style.backgroundImage;

            // Встановлюємо нові значення для теми
            heroSection.style.setProperty('--main-color', getComputedStyle(this).getPropertyValue('--main-color'));
            heroSection.setAttribute('data-theme', theme);
            heroSection.style.backgroundImage = getComputedStyle(this).backgroundImage;

            // Відновлюємо збережені значення background та background-image
            heroSection.style.background = currentBackground;
            heroSection.style.backgroundImage = currentBackgroundImage;
        });
    });
});
