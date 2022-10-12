import {randomNumber, getRandomArrayElement} from './utils/util.js';
import {PHOTOS_DESCRIPTIONS_ARRAY, SIMILAR_PHOTO_COUNT} from './data.js';

const createPhoto = () => ({
  id: randomNumber(1, 25),
  url: `photos/${randomNumber(1, 25)}.jpg`,
  description: getRandomArrayElement(PHOTOS_DESCRIPTIONS_ARRAY),
  likes: randomNumber(15, 200),
  comments: randomNumber(0, 200),
});

const createPhotos = () => Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

export {createPhotos};
