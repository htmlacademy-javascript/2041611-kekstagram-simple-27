const scaleCounter = document.querySelector('.scale__control--value');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const photoPreview = document.querySelector('.img-upload__preview img');

const DEFAULT_SCALE_STEP = 25, MIN_SCALE_VALUE = 25, MAX_SCALE_VALUE = 100;

function setScaleOnPicture() {
  const currentValue = parseFloat(scaleCounter.value);
  photoPreview.style.transform = `scale(${currentValue / 100})`;
}

function onSmallerScaleClick() {
  const currentValue = parseFloat(scaleCounter.value);

  if (currentValue === MIN_SCALE_VALUE) {
    return false;
  }

  scaleCounter.value = `${currentValue - DEFAULT_SCALE_STEP}%`;

  setScaleOnPicture();
}

function onBiggerScaleClick() {
  const currentValue = parseFloat(scaleCounter.value);

  if (currentValue === MAX_SCALE_VALUE) {
    return false;
  }

  scaleCounter.value = `${currentValue + DEFAULT_SCALE_STEP}%`;

  setScaleOnPicture();
}

function resetScaleModifier() {
  photoPreview.style.transform = '';
}

scaleSmallerButton.addEventListener('click', onSmallerScaleClick);
scaleBiggerButton.addEventListener('click', onBiggerScaleClick);

export {resetScaleModifier};
