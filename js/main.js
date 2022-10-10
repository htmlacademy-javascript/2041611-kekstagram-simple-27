function randomNumber (min, max) {
  if (min < 0 || max < 0 && max <= min && max === min) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  // формула расчёта взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function stringLength (string, maxLength) {
  const result = string.length <= maxLength;
  return result;
}

stringLength();

const PHOTOS_DESCRIPTIONS_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SIMILAR_PHOTO_COUNT = 25;

const getRandomArrayElement = (elements) => elements[randomNumber(0, elements.length - 1)];

const createPhoto = () => ({
  id: randomNumber(1, 25),
  url: `photos/${randomNumber(1, 25)}.jpg`,
  description: getRandomArrayElement(PHOTOS_DESCRIPTIONS_ARRAY),
  likes: randomNumber(15, 200),
  comments: randomNumber(0, 200),
});

const similarPhoto = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

similarPhoto();
