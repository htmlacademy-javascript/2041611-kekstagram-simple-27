import {getRandomPositiveInteger, generateRandomUniqueInteger, getRandomArrayElement} from '../utils/util.js';
import {PHOTOS_DESCRIPTIONS_ARRAY, SIMILAR_PHOTO_COUNT} from './data.js';

// функция создания фотографии
const createPhoto = () => ({
  id: generateRandomUniqueInteger(),
  url: `photos/${generateRandomUniqueInteger()}.jpg`,
  description: getRandomArrayElement(PHOTOS_DESCRIPTIONS_ARRAY),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const createPhotos = () => Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

// создание DOM-элементов, соответствующих фотографиям с заполненными их данными
const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

function createPictureList(pictureData) {
  const pictureListFragment = document.createDocumentFragment();

  pictureData.forEach(({url, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);

    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;
    pictureListFragment.append(picture);
  });

  picturesContainer.append(pictureListFragment);
}

function renderPictureList(pictureData) {
  createPictureList(pictureData);
}

function removeOldPictureList() {
  picturesContainer.querySelectorAll('.picture').forEach((item) => item.remove());
}

export {createPhotos, createPictureList, renderPictureList, removeOldPictureList};
