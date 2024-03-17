import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// ================SWIPER=================

const slideContainer = document.querySelector('.container');

function countSkillsPerView() {
  const containerWidth = slideContainer.clientWidth;
  if (containerWidth === 375) {
    return 2;
  } else if (containerWidth === 768) {
    return 3;
  } else if (containerWidth === 1440) {
    return 6;
  }
}

const swiperAbout = new Swiper('.swiper3', {
  slidesPerView: countSkillsPerView(),
  loop: true,
  navigation: {
    nextEl: '.right-btn3',
  },
  speed: 750,
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

function resizeHandle() {
  swiperAbout.params.slidesPerView = countSkillsPerView();
  swiperAbout.update();
}
window.addEventListener('resize', resizeHandle);

// ================ACCORDION=================

const accordionAbout = new Accordion('.accordion-container-about', {
  duration: 700,
  showMultiple: true,
});
accordionAbout.open(0);
