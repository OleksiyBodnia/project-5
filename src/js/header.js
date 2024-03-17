const containerHeader = document.querySelector('.header__container'),
    burgerBtn = document.querySelector('.borger'),
    navigationBtn = document.querySelector('.menu__title'),
    navList = document.querySelector('.header__menu'),
    body = document.querySelector('body');

burgerBtn.addEventListener('click', () =>{
    containerHeader.classList.toggle('open');
    body.classList.toggle('lock')
});

navigationBtn.addEventListener('click', () =>{
    navList.classList.toggle('open');
});