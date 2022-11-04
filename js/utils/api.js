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

  throw new Error(`Ошибка: ${response.status} - ${response.statusText} `);
}

function sendPhotos(onSuccess, onFail, body) {
  fetch(url.POST,
    {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
}

export {getPhotos, sendPhotos};
