import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const slideContainer = document.querySelector(".container");
const reviemList = document.querySelector('.reviews-list');
const notFoundLabel = document.querySelector('.not-found');

function countSlidesPerView() {
  const containerWidth = slideContainer.clientWidth;
  if (containerWidth === 375) {
    return 1;
  } else if (containerWidth === 768) {
    return 2;
  } else if (containerWidth === 1440) {
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
  navigation: {
    nextEl: '.right-btn2',
    prevEl: '.left-btn2',
  },
  speed: 750,
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

async function fetchReviews() {
  try {
    const response = await fetch("https://portfolio-js.b.goit.study/api/reviews");
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    renderReviews(data);
    notFoundLabel.classList.add('visually-hidden');
  } catch (error) {
    notFoundLabel.classList.remove('visually-hidden');
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch reviews from server',
      position: 'bottomRight',
    });
  }
}

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

fetchReviews();
