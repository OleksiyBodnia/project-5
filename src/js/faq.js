import faqAccordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionfaq = new faqAccordion('.accordion-container-faq', {
    duration: 400,
    showMultiple: true,
});

const faqButtons = document.querySelectorAll('.faq-show-hidden-text-button');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const arrowIcon = button.querySelector('.faq-button-icon');
        arrowIcon.classList.toggle('arrow-up');
    })
});
