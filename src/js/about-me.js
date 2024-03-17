import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperAbout = new Swiper('.swiper-about', {
  direction: 'horizontal',
  loop: true,
  speed: 750,

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

  grabCursor: true,
  simulateTouch: true,

  on: {
    init: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide[index].classList.remove('active-slide');
          slide[index + 1].classList.add('active-slide');
        } else {
          slide.classList.remove('active-slide');
        }
      });
    },
  },

  slideChange: function () {
    const activeIndex = this.activeIndex;
    this.slides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide[index].classList.remove('active-slide');
        slide[index + 1].classList.add('active-slide');
      } else {
        slide.classList.remove('active-slide');
      }
    });
  },
});
swiperAbout.update();
const accordionAbout = new Accordion('.accordion-container-about', {
  duration: 700,
  showMultiple: true,
});
accordionAbout.open(0);
