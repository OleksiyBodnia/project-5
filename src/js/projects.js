// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    speed: 500,
    keyboard: {
        enabled: true, // Включення взаємодії з клавіатурою
      },
    
      grabCursor: true, // Змінює вигляд курсора при натисканні та перетягуванні слайдів
    
      simulateTouch: true, // Підключення імітації торкання на пристроях з клавіатурою та мишею

  });
