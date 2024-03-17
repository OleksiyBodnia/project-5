import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperAbout = new Swiper('.swiper-about', {
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
    // when window width is >= 678px
    678: {
      slidesPerView: 3,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 6,
    },
  },

  keyboard: {
    enabled: true,
  },

  //   grabCursor: true,
  //   simulateTouch: true,
});

const accordionAbout = new Accordion('.accordion-container-about', {
  duration: 700,
  showMultiple: true,
});
accordionAbout.open(0);
