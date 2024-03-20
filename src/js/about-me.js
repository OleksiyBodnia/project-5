import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// ================SWIPER=================

const swiperAbout = new Swiper('.swiper-about', {
  loop: true,
  speed: 750,

  navigation: {
    nextEl: '.about-me-skills-button',
  },

  grabCursor: true,
  simulateTouch: true,
  keyboard: {
    enabled: true,
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

  on: {
    init: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active-slide');
        } else {
          slide.classList.remove('active-slide');
        }
      });
    },
    slideChange: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active-slide');
        } else {
          slide.classList.remove('active-slide');
        }
      });
    },
  },
});

// ================ACCORDION=================

const accordionAbout = new Accordion('.accordion-container-about', {
  duration: 700,
  showMultiple: true,
});
accordionAbout.open(0);
