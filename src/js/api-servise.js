import axios from 'axios';
const BASE_URL = 'https://pixabay.com';
const KEY = '11934096-c57767468e4e2a669aee9e98a';
const PER_PAGE = 40;

export default class PicturesApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = '';
    this.totalHits = '';
    this.pageTotal = '';
  }

  async fetchPictures() {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/?key=${KEY}&q=${this.searchQuery}&image_type=photo/&orientation=horizontal/&safesearch=true/&page=${this.page}&per_page=40`
      );
      const data = await response.data;

      this.totalHits = data.totalHits;
      this.pageTotal = Math.ceil(this.totalHits / PER_PAGE);
      // console.log('how many pages', this.pageTotal);

      if (data.total === 0) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      Notify.failure(error.message);
    }
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

//   return fetch(
//     `${BASE_URL}/api/?key=${KEY}&q=${this.searchQuery}&image_type=photo/&orientation=horizontal/&safesearch=true/&page=${this.page}/&per_page=40`
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       this.incrementPage();

//       return data.hits;
//     });
// }

// .then(response => {
//         console.log(response.data.hits);
//         return response.data.hits;
//       })
//       .catch(error => console.log(error));
