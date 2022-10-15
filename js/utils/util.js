function getRandomPositiveInteger (min, max) {
  if (min < 0 || max < 0 && max <= min && max === min) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  // формула расчёта взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
  return result;
}

//функцию-генератор для получения уникальных идентификаторов из указанного диапазона, и так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
function createRandomUniqueInteger (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// function stringLength (string, maxLength) {
//   const result = string.length <= maxLength;
//   return result;
// }

const generateRandomUniqueInteger = createRandomUniqueInteger(1, 25);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomPositiveInteger, generateRandomUniqueInteger, getRandomArrayElement};
