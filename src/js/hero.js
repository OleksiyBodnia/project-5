import image1 from '../img/mobil/bg/m-hero.png';
import image2 from '../img/mobil/bg/m-covers.png';

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const colorOptions = document.querySelectorAll('.color span');
    const headerMobMenu = document.querySelector('.mobile-menu-header');
    const covers = document.querySelector('.covers');

    colorOptions.forEach((span, index) => {
        span.addEventListener('click', function() {
            if (index !== 0){
                covers.style.backgroundImage = "none";
            } else {
                covers.style.backgroundImage = `url(${image2})`;
            }

            if (index === 0){
                document.documentElement.style.setProperty('--red', '#ED3B44');
                document.documentElement.style.setProperty('--red-hover', '#E0373F');
                headerMobMenu.style.backgroundImage = `url(${image1})`;
                headerMobMenu.style.backgroundPosition = 'top left';
                headerMobMenu.style.backgroundSize = 'cover';
                headerMobMenu.style.backgroundRepeat = 'no-repeat';
            }
            else if (index === 1) {
                document.documentElement.style.setProperty('--red', '#C6E327');
                document.documentElement.style.setProperty('--red-hover', 'rgba(198, 227, 39, 0.8)');
                headerMobMenu.style.backgroundImage = "none";
                headerMobMenu.style.background = "linear-gradient(90deg, #1C1D20 49.69%, #596808 67.71%, rgba(198, 227, 39) 99.91%)";
            } else if(index === 2){
                document.documentElement.style.setProperty('--red', '#0041E8');
                document.documentElement.style.setProperty('--red-hover', 'rgba(0, 65, 232, 0.8)'); 
                headerMobMenu.style.backgroundImage = "none";
                headerMobMenu.style.background = "linear-gradient(90deg, #1C1C20 49.69%, #001958 67.71%, #0041E8 99.91%)";
            } else if(index === 3){
                document.documentElement.style.setProperty('--red', '#E6533C');
                document.documentElement.style.setProperty('--red-hover', 'rgba(230, 83, 60, 0.8)');
                headerMobMenu.style.backgroundImage = "none";
                headerMobMenu.style.background = "linear-gradient(90deg, #1C1D20 49.69%, #9F3626 67.71%, #E6533C 99.91%)";
            }else if(index === 4){
                document.documentElement.style.setProperty('--red', '#2B4441');
                document.documentElement.style.setProperty('--red-hover', 'rgba(43, 68, 65, 0.8)');
                headerMobMenu.style.backgroundImage = "none";
                headerMobMenu.style.background = "linear-gradient(90deg, #1C1D20 49.69%, #1E3633 67.71%, #2B4441 99.91%)";
            }else if(index === 5){
                document.documentElement.style.setProperty('--red', '#FF7F08');
                document.documentElement.style.setProperty('--red-hover', 'rgba(255, 127, 8, 0.8)');
                headerMobMenu.style.backgroundImage = "none";
                headerMobMenu.style.background = "linear-gradient(90deg, #1C1D20 49.69%, #AC5300 67.71%, #FF7F08 99.91%, #FF7F08 99.91%)";
            }

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
})
