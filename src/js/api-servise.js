export default class PicturesApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPictures() {
    const BASE_URL = 'https://pixabay.com';
    const KEY = '11934096-c57767468e4e2a669aee9e98a';

    return fetch(
      `${BASE_URL}/api/?key=${KEY}&q=${this.searchQuery}&image_type=photo/&orientation=horizontal/&safesearch=true/&page=${this.page}/&per_page=40`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.incrementPage();

        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
