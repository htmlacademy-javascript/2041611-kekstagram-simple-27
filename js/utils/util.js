function randomNumber (min, max) {
  if (min < 0 || max < 0 && max <= min && max === min) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  // формула расчёта взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
  return result;
}

// function stringLength (string, maxLength) {
//   const result = string.length <= maxLength;
//   return result;
// }

const getRandomArrayElement = (elements) => elements[randomNumber(0, elements.length - 1)];

export {randomNumber, getRandomArrayElement};
