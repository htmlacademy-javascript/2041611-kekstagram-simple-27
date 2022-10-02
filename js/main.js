function randomNumber (min, max) {
  if (min < 0 || max < 0 && max <= min && max === min) {
    return NaN;
  }

  // формула расчёта взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

randomNumber();

function stringLength (string, maxLength) {
  const result = string.length <= maxLength;
  return result;
}

stringLength();
