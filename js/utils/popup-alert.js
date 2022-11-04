import { isEscapeEvent } from './escape-event.js';
import { isOutsideEvent } from './out-click-event.js';

function openAlert(type, message, buttonText) {
  const alertTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const alert = alertTemplate.cloneNode(true);

  const closeAlertButton = alert.querySelector(`.${type}__button`);

  if (message) {
    alert.querySelector(`.${type}__title`).textContent = message;
    closeAlertButton.textContent = buttonText;
  }

  function onAlertCloseClick() {
    alert.remove();

    closeAlertButton.removeEventListener('click', onAlertCloseClick);
    document.removeEventListener('click', onOutCloseClick);
    document.removeEventListener('keydown', onEscapeClose);
  }

  function onEscapeClose(evt) {
    if (isEscapeEvent(evt)) {
      evt.preventDefault();
      alert.remove();
    }

    closeAlertButton.removeEventListener('click', onAlertCloseClick);
    document.removeEventListener('click', onOutCloseClick);
    document.removeEventListener('keydown', onEscapeClose);
  }

  function onOutCloseClick(evt) {
    if (isOutsideEvent(evt)) {
      evt.preventDefault();
      alert.remove();
    }
  }

  document.body.append(alert);

  closeAlertButton.addEventListener('click', onAlertCloseClick);
  document.addEventListener('click', onOutCloseClick);
  document.addEventListener('keydown', onEscapeClose);
}

export {openAlert};
