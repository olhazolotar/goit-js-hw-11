import './sass/index.scss';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderGalleryMurkup } from './js/renderGalleryMurkup';
// import { fetchImages } from './js/fetchImages'

const refs = {
    searchForm: document.querySelector('#search-form'),
    imageCard: document.querySelector('.gallery'),
    searchBtn: document.querySelector('.search-form > button'),
}

refs.searchForm.addEventListener('submit', onSearch);

const BASE_URL = 'https://pixabay.com';
const KEY = '11934096-c57767468e4e2a669aee9e98a';

function fetchPictures(titlePicture) {
    return fetch(`${BASE_URL}/api/?key=${KEY}&q=${titlePicture}&image_type=photo/&orientation=horizontal/&safesearch=true/&page=1/&per_page=40`)
        .then(response => response.json());
}

function onSearch(event) {
    event.preventDefault();

    const inputForm = refs.searchForm.elements.searchQuery.value;
    // console.log(inputForm);

    fetchPictures(inputForm).then(getPictures => {
        refs.imageCard.insertAdjacentHTML('beforeend', renderGalleryMurkup(getPictures.hits));
        // console.log(getPictures);        
        
})
}

    

