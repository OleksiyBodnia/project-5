import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const contactEmail = document.querySelector(".work-together-input-email");
const contactComment = document.querySelector(".work-together-comments");
const contactForm = document.querySelector(".work-together-subscribe");
const label = document.querySelector(".label-input-email");
const modalBackdrop = document.querySelector(".work-together-backdrop");
const modalBackdropBg = document.querySelector(".modal-backdrop-bg");
const modalTitle = document.querySelector(".work-together-modal-head-text");
const modalText = document.querySelector(".work-together-invitation");
const modalBtn = document.querySelector(".work-together-modal-close-x-btn");
const body = document.body;

// підслуховувач відправки форми
contactForm.addEventListener("submit", getContactInfo);

// функція бере дані з форми і відправляє їх на сервер
function getContactInfo(event) {
    // обнулення стандартних сценаріїв на сторінці при submit
    event.preventDefault();

    // забираємо дані з форми і прибираємо пробіли
    const userEmail = event.target.elements.email.value.trim();
    const userComment = event.target.elements.comments.value.trim();
    
    // посилання на API для залиття інформації і шаблон зібраної інформації
    const url = 'https://portfolio-js.b.goit.study/api/requests';
    const data = {
        email: `${userEmail}`,
        comment: `${userComment}`
    };

    // запит POST на сервер
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            // якщо запит не спрацював виводиться спливаюче попередження знизу сторінки
            if (!response.ok) {
                return iziToast.error({
                    title: 'Error',
                    message: `Sorry, try again!`,
                    messageColor: 'white',
                    messageSize: '16',
                    backgroundColor: 'red',
                    theme: 'dark',
                    position: 'bottomRight',
                });
            }
            // якщо із запитом все ок - розджейсонюємо отриману інформацію від сервера
            return response.json();
        })
        .then(data => {
            // із запитом все ок - відкриваємо модалку із привітанням що скоро зв'яжемось,
            // ставимо затемнялку на всю сторінку за модальним вікном, відключаємо прокрутку сторінки
            modalBackdrop.classList.remove("visually-hidden");
            modalBackdrop.style.display = 'block';
            modalBackdropBg.classList.remove("visually-hidden");
            body.classList.add('modal-open');
            // в повідомлення на модалці вставляємо відповідь з сервера 
            modalTitle.textContent = data.title;
            modalText.textContent = data.message;
            // обнуляємо форму
            contactForm.reset();
            // прибираємо підпис на полі е-мейл
            label.textContent = "";
            // поле е-мейл знову з базовим кольором
            contactEmail.style.borderBottomColor = 'rgba(250, 250, 250, 0.20)';
        })
        .catch(error => {
            // ловимо помилку відсутності інтернету - виводимо відповідне повідомлення
            return iziToast.error({
                title: 'Error',
                message: `Sorry,  network is fall, check your modem and try again!`,
                messageColor: 'white',
                messageSize: '16',
                backgroundColor: 'red',
                theme: 'dark',
                position: 'bottomRight',
            });
        });
}

// підслуховувач на інпут емейла і правильне його заведення
// під час прописання і клікання десь
contactEmail.addEventListener("blur", checkEmail);

function checkEmail(event) {
    // считуємо вписані в поле дані
    const userEmail = event.target.value.trim();
    // шаблон перевірки заповнення емейлу
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // якщо поле порожнє або чисто з пробілами валідації немає
    if (userEmail === "") {
        return;
    }
    if (emailRegex.test(userEmail)) {
        // якщо поле пройшло валідацію - відмальовуємо зеленим підпис і риску
        label.textContent = "Succes!";
        contactEmail.style.borderBottomColor = '#3CBC81';
        label.style.color = '#3CBC81';
    } else {
        // якщо валідацію не пройдено - відмальовуємо попередження червоним і риску
        label.textContent = "Invalid email, try again";
        contactEmail.style.borderBottomColor = '#E74A3B';
        label.style.color = '#E74A3B';
    }
}

// підслуховувач довжини поля для коментарів
contactComment.addEventListener("input", checkCommentLength);

function checkCommentLength(event) {
    // считуємо з налаштувань довжину можливого заповнення поля
    const maxLength = parseInt(this.getAttribute("maxlength"));
    // забираємо дані з поля
    const userComment = event.target.value.trim();
    // якщо коментар більший то рішемо по максимальній довжині
    if (userComment > maxLength) {
        userComment = userComment.slice(0, maxLength); // Обрізаємо текст до максимальної довжини
    }
    // забороняємо перерос на інші строчки, все що більше ніж треба ховаємо, відмальовуємо в хвості ...
    contactComment.style.whiteSpace = 'nowrap';
    contactComment.style.overflow = 'hidden';
    contactComment.style.textOverflow = 'ellipsis';
}

// слухачі подій на модалці і на кнопці модалки
modalBtn.addEventListener("click", closeModal);
modalBackdropBg.addEventListener("click", closeModal);
// підслуховувач на натискання кнопки ESC
document.addEventListener("keydown", event => {
    if (event.key === 'Escape' || event.key === 'Esc' || event.code === 27) {
        closeModal();
    }
});

// функція закриття модального вікна, ховає його? прописує невидимість, прибирає затемнялку зі сторінки
// включає можливість прокрутки сторінки
function closeModal() {
    modalBackdrop.classList.add("visually-hidden");
    modalBackdrop.style.display = 'none';
    modalBackdropBg.classList.add("visually-hidden");
    body.classList.remove('modal-open');
}