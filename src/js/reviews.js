// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const slideContainer = document.querySelector(".container");
const reviemList = document.querySelector('.reviews-list')

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


async function fetchReviews(){
  const data = await fetch("https://portfolio-js.b.goit.study/api/reviews").then(res => res.json())
  renderReviews(data);
}

fetchReviews();

const renderReviews = (data) => {
  data.forEach(element => {

      const markup = `<li class="reviews-item swiper-slide">
      <img class="img-reviews" src="${element.avatar_url}" alt="reviews" loading="lazy" width="48" height="48"/>
      <h3 class="reviews-head">${element.author}</h3>
      <p class="reviews-text">${element.review}</p>  
    
  </li>`;

      reviemList.insertAdjacentHTML('beforeend', markup);

  });
}
