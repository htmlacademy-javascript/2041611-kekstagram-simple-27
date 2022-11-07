import { showSuccessMessage, showErrorMessage } from './data-sending-message.js';

const url = {
  POST: 'https://27.javascript.pages.academy/kekstagram-simple',
  GET: 'https://27.javascript.pages.academy/kekstagram-simple/data',
};

async function getPhotos() {
  const response = await fetch(url.GET,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  );

  if (response.ok) {
    return await response.json();
  }

  throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
}

function sendPhotos(body) {
  fetch(url.POST,
    {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        showSuccessMessage();
      } else {
        showErrorMessage('Не удалось отправить форму!');
      }
    })
    .catch(() => {
      showErrorMessage('Не удалось отправить форму!');
    });
}

export {getPhotos, sendPhotos};
