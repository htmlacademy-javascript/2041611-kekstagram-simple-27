import { sendPhotos } from '../utils/api.js';
import { showSuccessMessage, showErrorMessage } from '../utils/data-sending-message.js';
import { onUploadModalCloseClick } from '../utils/upload-modal.js';
import { resetFileInput } from './file-upload.js';

const photoUploadForm = document.querySelector('.img-upload__form');
const submitButtonForm = document.querySelector('.img-upload__submit');

const pristine = new Pristine(photoUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text_error',
});

const blockSubmitButton = () => {
  submitButtonForm.disabled = true;
  submitButtonForm.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButtonForm.disabled = false;
  submitButtonForm.textContent = 'Сохранить';
};

photoUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendPhotos(
      () => {
        resetUploadForm();
        showSuccessMessage();
        unblockSubmitButton();
      },
      () => {
        resetUploadForm();
        showErrorMessage('Не удалось отправить форму!');
        unblockSubmitButton();
      },
      new FormData(photoUploadForm),
    );
  }
});

function resetUploadForm() {
  photoUploadForm.reset();

  onUploadModalCloseClick();
  resetFileInput();
}
