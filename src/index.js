import './sass/index.scss';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { picturesMurkup } from './js/picturesMurkup';
import PicturesApiServise from './js/api-servise';


const refs = {
    searchForm: document.querySelector('#search-form'),
    imageCard: document.querySelector('.gallery'),
    searchBtn: document.querySelector('.search-form > button'),
    loadMoreBtn: document.querySelector('.load-more')
}

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const picturesApiServise = new PicturesApiServise();

function onSearch(event) {
    event.preventDefault();

    picturesApiServise.query = event.currentTarget.elements.searchQuery.value;
    picturesApiServise.resetPage(); 
    picturesApiServise.fetchPictures().then(hits => console.log(hits));
}

function onLoadMore() {
    picturesApiServise.fetchPictures().then(hits => console.log(hits));
    console.log(hits);
}

function appendPicturesMurkup() {
    refs.imageCard.insertAdjacentHTML('beforeend', picturesMurkup());
}





