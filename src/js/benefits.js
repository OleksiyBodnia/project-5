// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// function scrollToWorkTogether() {
//   const workTogetherSection = document.getElementById("work-together-section");
//   workTogetherSection.scrollIntoView({ behavior: "smooth" });
// }

const benefitsButton = document.querySelector('.benefits-button');
const workTogetherSection = document.getElementById('work-together-section-id');

benefitsButton.addEventListener('click', () => {
  workTogetherSection.scrollIntoView({ behavior: 'smooth' });
});