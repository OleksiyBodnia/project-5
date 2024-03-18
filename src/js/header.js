const menuTitle = document.querySelector('.menu__title');
const menuList = document.querySelector('.menu__list');
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
const closeBtnHeader = document.querySelector('.close-btn-header');
const mobileMenuHeader = document.querySelector('.mobile-menu-header');
const burger = document.querySelector('.burger');
const menuBirgerLink = document.querySelectorAll('.mobile-menu-item-link');
const bottomBurgerMenuBtn = document.querySelector('.link-wt');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

menuTitle.addEventListener('click', function() {
    menuList.classList.toggle('show');
});

closeBtnHeader.addEventListener('click', function() {
    mobileMenuHeader.classList.add('closeMenu');
    mobileMenuHeader.classList.remove('showMenu')
});


burger.addEventListener('click', function() {
    mobileMenuHeader.classList.add('showMenu');
    mobileMenuHeader.classList.remove('closeMenu')
})


menuBirgerLink.forEach(element => element.addEventListener('click', function() {
    mobileMenuHeader.classList.add('closeMenu');
    mobileMenuHeader.classList.remove('showMenu')  
}))


bottomBurgerMenuBtn.addEventListener('click', function() {
    
    mobileMenuHeader.classList.add('closeMenu');
    mobileMenuHeader.classList.remove('showMenu') 
})



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
