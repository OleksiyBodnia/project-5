const containerHeader = document.querySelector('.header__container'),
    burgerBtn = document.querySelector('.borger'),
    navigationBtn = document.querySelector('.menu__title'),
    navList = document.querySelector('.header__menu'),
    body = document.querySelector('body');
const headerSection = document.querySelector('.header-section');
const navigationMenu = document.querySelector('.navigation__menu');
const headerBtn = document.querySelector('.header__button');
const workTogetherSection = document.querySelector('#work-together-section-id')

burgerBtn.addEventListener('click', () =>{
    containerHeader.classList.toggle('open');
    body.classList.toggle('lock');


    if(containerHeader.classList.contains('open')) {
        headerSection.style.backgroundImage = 'url("./img/mobil/bg/m-hero-menu.png")';
        headerSection.style.backgroundSize = 'cover';
        headerSection.style.height = "1000px";
        navigationMenu.style.height = "100vh"
    } else {
        headerSection.style.backgroundImage = 'none';
        headerSection.style.height = "0px";
        navigationMenu.style.height = "0vh"
    }
});

navigationBtn.addEventListener('click', () =>{
    navList.classList.toggle('open');
});

window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;

    if (windowWidth > 376) {
        navigationMenu.style.height = "auto"
    } 
});

window.addEventListener('DOMContentLoaded', function() {
    window.dispatchEvent(new Event('resize'));
});

document.querySelectorAll('.item__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Перешкоджаємо стандартному переходу за посиланням
        
        // Перевірка ширини екрана
        if (window.innerWidth <= 376) {
            containerHeader.classList.toggle('open');
            body.classList.toggle('lock');
            headerSection.style.backgroundImage = 'none';
            headerSection.style.height = "0px";
            navigationMenu.style.height = "0vh";
        }
        
        const targetId = this.getAttribute('href'); // Отримуємо id цільової секції
        const targetSection = document.querySelector(targetId); // Знаходимо цільову секцію

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Плавний скролінг до цільової секції
        }
    });
});



// headerBtn.addEventListener('click', function() {
//     workTogetherSection.scrollIntoView({ behavior: 'smooth' });
//     if (window.innerWidth <= 376) {
//         containerHeader.classList.toggle('open');
//         body.classList.toggle('lock');
//         headerSection.style.backgroundImage = 'none';
//         headerSection.style.height = "0px";
//         navigationMenu.style.height = "0vh";
//     }
// });
