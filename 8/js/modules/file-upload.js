import { uploadModalOpen } from '../utils/upload-modal';

const photoUploadForm = document.querySelector('.img-upload__form');
const photoInput = photoUploadForm.querySelector('.img-upload__input');
const photoPreview = photoUploadForm.querySelector('.img-upload__preview img');
const photoEffectsPreview = photoUploadForm.querySelectorAll('.effects__preview');

const VALID_PHOTO_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_PREVIEW_IMAGE = 'img/upload-default-image.jpg';

photoInput.addEventListener('change', (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const isFormatValid = VALID_PHOTO_TYPES.some((type) => fileName.endsWith(type));

  if (isFormatValid) {
    uploadModalOpen();

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreview.src = reader.result;
      photoEffectsPreview.forEach((preview) => {
        preview.style.backgroundImage = `url('${reader.result}')`;
      });
    });

    reader.readAsDataURL(file);
  }
});

function resetFileInput() {
  photoInput.value = '';

  photoPreview.src = DEFAULT_PREVIEW_IMAGE;
  photoEffectsPreview.src = DEFAULT_PREVIEW_IMAGE;
}

export {resetFileInput};
