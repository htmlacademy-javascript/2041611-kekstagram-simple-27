import { isEscapeEvent } from './escape-event.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

//Показ сообщения об успешной отправке данных
function showSuccessMessage() {
  const successMessage = successMessageTemplate.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    successMessage.remove();
  });
  document.body.append(successMessage);
  isEscapeEvent();
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
  isEscapeEvent();
}

export {showSuccessMessage, showErrorMessage};
