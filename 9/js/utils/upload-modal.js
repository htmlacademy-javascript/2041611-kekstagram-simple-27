import { isEscapeEvent } from './escape-event.js';

const body = document.querySelector('body');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');

function onEscCloseKey(evt) {
  if (isEscapeEvent(evt)) {
    evt.preventDefault();

    onUploadModalCloseClick();
  }
}

function uploadModalOpen() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  closeButton.addEventListener('click', onUploadModalCloseClick);
  document.addEventListener('keydown', onEscCloseKey);
}

function onUploadModalCloseClick() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  closeButton.removeEventListener('click', onUploadModalCloseClick);
  document.removeEventListener('keydown', onEscCloseKey);
}

export {uploadModalOpen, onUploadModalCloseClick};
