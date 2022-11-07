import { getPhotos } from '../utils/api.js';
import { showErrorMessage } from '../utils/data-sending-message.js';

// создание DOM-элементов, соответствующих фотографиям с заполненными их данными
const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

function removeOLdPictureList() {
  picturesContainer.querySelectorAll('.picture').forEach((item) => item.remove());
}

function createPictureList(pictureData) {
  const pictureListFragment = document.createDocumentFragment();
  removeOLdPictureList();

  pictureData.forEach(({id, url, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);

    picture.href = `#${id}`;
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;

    pictureListFragment.append(picture);
  });

  picturesContainer.append(pictureListFragment);
}

function getPictureList() {
  getPhotos()
    .then((data) => {
      createPictureList(data);
    })
    .catch(() => {
      showErrorMessage('Не удалось отправить форму!');
    });
}

getPictureList();

export {getPictureList};
