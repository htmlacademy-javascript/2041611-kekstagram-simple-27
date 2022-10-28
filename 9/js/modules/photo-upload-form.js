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
});

function resetUploadForm() {
  photoUploadForm.reset();

  onUploadModalCloseClick();
  resetFileInput();
}

resetUploadForm();
