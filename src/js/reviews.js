// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const slideContainer = document.querySelector(".container");

function countSlidesPerView(){
  const containerWidth = slideContainer.clientWidth;
  if (containerWidth === 375){
    return 1;
  } else if(containerWidth === 768){
    return 2;
  } else if(containerWidth === 1440) {
    return 4;
  }
}

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    slidesPerView: countSlidesPerView(),
    spaceBetween: 16,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.right-btn2',
      prevEl: '.left-btn2',
    },

    speed: 500,
    keyboard: {
        enabled: true,
      },
    
      grabCursor: true, 
    
      simulateTouch: true,

});
function handleResize() {
  swiper2.params.slidesPerView = countSlidesPerView(); 
  swiper2.update();
}
window.addEventListener('resize', handleResize);