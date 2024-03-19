const benefitsButton = document.querySelector('.benefits-button');
const workTogetherSection = document.getElementById('work-together-section-id');

benefitsButton.addEventListener('click', () => {
  workTogetherSection.scrollIntoView({ behavior: 'smooth' });
});