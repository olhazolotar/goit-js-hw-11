import './sass/index.scss';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { picturesMurkup } from './js/picturesMurkup';
import PicturesApiServise from './js/api-servise';
// import picturesTpl from './templates/pictures.hbs';
import LoadMoreBtn from './js/load-more-btn';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryContainer: document.querySelector('.gallery'),
  searchBtn: document.querySelector('.search-form > button'),
};

const picturesApiServise = new PicturesApiServise();
const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more',
  hidden: true,
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.btn.addEventListener('click', onLoadMore);

console.log(loadMoreBtn);

function onSearch(event) {
  event.preventDefault();

  picturesApiServise.query = event.currentTarget.elements.searchQuery.value;
  if (picturesApiServise.query === '') {
    clearGalleryContainer();
    loadMoreBtn.hide();
    Notify.warning('Search query is empty!');
    return;
  }

  picturesApiServise.resetPage();
  picturesApiServise.fetchPictures().then(hits => {
    clearGalleryContainer();
    appendPicturesMurkup(hits);
    loadMoreBtn.show();
  });
}

function onLoadMore() {
  picturesApiServise.fetchPictures().then(appendPicturesMurkup);
  console.log(hits);
}

function appendPicturesMurkup(hits) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', picturesMurkup(hits));
}

function clearGalleryContainer() {
  refs.galleryContainer.innerHTML = '';
}
