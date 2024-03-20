import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    spaceBetween: 16,
    navigation: {
      nextEl: '.right-btn1',
      prevEl: '.left-btn1',
    },
    speed: 750,
    keyboard: {
        enabled: true,
    },
    grabCursor: true,
    simulateTouch: true, 
  });

  