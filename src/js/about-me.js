import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-container', {});
accordion.open(1);

const buttonUp = document.querySelector('.about-me-button-up');
const buttonUpAll = document.querySelectorAll('.about-me-button-up');

const buttonDown = document.querySelector('.about-me-button-down');
const buttonDownAll = document.querySelectorAll('.about-me-button-down');

const accordionPanelAll = document.querySelectorAll('.ac-panel');
const accordionPanel = document.querySelector('.ac-panel');

// accordionPanelAll.forEach(item => {
//   return item.classList.add('visually-hidden');
// });

buttonUp.addEventListener('click', visiblePanel);
buttonDown.addEventListener('click', invisiblePanel);

accordionPanel.classList.add('visually-hidden');
buttonDown.classList.add('is-hidden');

function visiblePanel() {
  buttonDown.classList.remove('is-hidden');
  buttonUp.classList.add('is-hidden');
  accordionPanel.classList.remove('visually-hidden');
}

function invisiblePanel() {
  buttonDown.classList.add('is-hidden');
  buttonUp.classList.remove('is-hidden');
  accordionPanel.classList.add('visually-hidden');
}

// buttonDownAll.forEach(item => {
//   return item.classList.add('is-hidden');
// });
