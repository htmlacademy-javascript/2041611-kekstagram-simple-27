import { isEscapeEvent } from './escape-event.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

//Закрытие информ. окна по клику на кнопке
const onResultCloseClick = () => document.body.lastChild.remove();

//Закрытие информационного окна клавишей ESC
const onResultEscPress = (evt) => {
  if (isEscapeEvent(evt)) {
    evt.preventDefault();
    onResultCloseClick();
  }
};

//Закрытие информ. окна по клику вне его области
const onWindowClick = (evt) => {
  if (!evt.target.closest('div')) {
    onResultCloseClick();
    window.removeEventListener('click', onWindowClick);
  }
};

//Показ сообщения об успешной отправке данных
function showSuccessMessage() {
  const successMessage = successMessageTemplate.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    successMessage.remove();
  });
  document.body.append(successMessage);

  window.addEventListener('click', onWindowClick);
  document.addEventListener('keydown', onResultEscPress, {once: true});
  successButton.addEventListener('click', onResultCloseClick, {once: true});
}

//Показ сообщения об ошибке при отправке/загрузке данных
function showErrorMessage(message) {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  const errorButton = errorMessage.querySelector('.error__button');

  errorMessage.querySelector('.error__title').textContent = message;
  errorButton.addEventListener('click', () => {
    errorMessage.remove();
  });
  document.body.append(errorMessage);

  window.addEventListener('click', onWindowClick);
  document.addEventListener('keydown', onResultEscPress, {once: true});
  errorButton.addEventListener('click', onResultCloseClick, {once: true});
}

export {showSuccessMessage, showErrorMessage};
