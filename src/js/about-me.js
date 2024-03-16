import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-about', {
  direction: 'horizontal',
  loop: true,
  speed: 500,

  navigation: {
    nextEl: '.about-me-skills-button',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6,
    },
  },

  keyboard: {
    enabled: true,
  },
  //   grabCursor: true,
  //   simulateTouch: true,
});

const accordion = new Accordion('.accordion-container', {});
accordion.open(1);

const buttonUp = document.querySelector('.about-me-button-up');
const buttonUpAll = document.querySelectorAll('.about-me-button-up');

const buttonDown = document.querySelector('.about-me-button-down');
const buttonDownAll = document.querySelectorAll('.about-me-button-down');

const accordionPanelAll = document.querySelectorAll('.ac-panel');
const accordionPanel = document.querySelector('.ac-panel');

// accordionPanelAll.forEach(item => {
//   return item.classList.add('visually-hidden');
// });

buttonUp.addEventListener('click', visiblePanel);
buttonDown.addEventListener('click', invisiblePanel);

accordionPanel.classList.add('visually-hidden');
buttonDown.classList.add('is-hidden');

function visiblePanel() {
  buttonDown.classList.remove('is-hidden');
  buttonUp.classList.add('is-hidden');
  accordionPanel.classList.remove('visually-hidden');
}

function invisiblePanel() {
  buttonDown.classList.add('is-hidden');
  buttonUp.classList.remove('is-hidden');
  accordionPanel.classList.add('visually-hidden');
}

// buttonDownAll.forEach(item => {
//   return item.classList.add('is-hidden');
// });
