import { resetEffectSettings } from '../modules/effects-control.js';
import { resetFileInput } from '../modules/file-upload.js';
import { resetScaleModifier } from '../modules/photo-scale-control.js';
import { isEscapeEvent } from './escape-event.js';

const body = document.querySelector('body');
const photoUploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');

function onEscCloseKey(evt) {
  const inputFocus = evt.target.matches('textarea:focus');

  if (inputFocus) {
    return false;
  }

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

  photoUploadForm.reset();
  resetEffectSettings();
  resetScaleModifier();
  resetFileInput();

  closeButton.removeEventListener('click', onUploadModalCloseClick);
  document.removeEventListener('keydown', onEscCloseKey);
}

export {uploadModalOpen, onUploadModalCloseClick};
