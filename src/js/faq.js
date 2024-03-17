import faqAccordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionfaq = new faqAccordion('.accordion-container-faq', {
    duration: 400,
    showMultiple: true,
});

const faqButtons = document.querySelectorAll('.faq-show-hidden-text-button');
console.log(faqButtons)

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const useElement = button.querySelector('use');
        const currentHref = useElement.getAttribute('href');
        if (currentHref === './icons/sprite.svg#arrow-down') {
            useElement.setAttribute('href', './icons/sprite.svg#arrow-up');
        } else {
            useElement.setAttribute('href', './icons/sprite.svg#arrow-down');
        }

    })
});
