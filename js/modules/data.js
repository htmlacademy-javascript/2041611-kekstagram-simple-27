import {randomNumber, getRandomArrayElement} from './utils/util.js';

const PHOTOS_DESCRIPTIONS_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SIMILAR_PHOTO_COUNT = 25;

const createPhoto = () => ({
  id: randomNumber(1, 25),
  url: `photos/${randomNumber(1, 25)}.jpg`,
  description: getRandomArrayElement(PHOTOS_DESCRIPTIONS_ARRAY),
  likes: randomNumber(15, 200),
  comments: randomNumber(0, 200),
});

const createPhotos = () => Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

export {createPhotos};
