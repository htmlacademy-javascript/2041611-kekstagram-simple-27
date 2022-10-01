function randomNumber (min, max) {
  if (min < 0 || max < 0 && max < min) {
    return NaN;
  }

  // формула расчёта взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumber();


function stringLength (string, maxLength) {
  return string.length < maxLength;
}

stringLength();
