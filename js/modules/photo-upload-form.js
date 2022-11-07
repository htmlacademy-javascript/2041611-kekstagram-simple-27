import { sendPhotos } from '../utils/api.js';
import { showSuccessMessage, showErrorMessage } from '../utils/data-sending-message.js';
import { onUploadModalCloseClick } from '../utils/upload-modal.js';
import { resetFileInput } from './file-upload.js';

const photoUploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(photoUploadForm);

photoUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    //eslint-disable-next-line no-console
    console.log('Можно отправлять');
  } else {
    //eslint-disable-next-line no-console
    console.log('Форма невалидна!');
  }

  sendPhotos(
    () => {
      resetUploadForm();
      showSuccessMessage();
    },
    () => {
      resetUploadForm();
      showErrorMessage('Не удалось отправить форму!');
    },
    new FormData(photoUploadForm),
  );
});

function resetUploadForm() {
  photoUploadForm.reset();

  onUploadModalCloseClick();
  resetFileInput();
}
