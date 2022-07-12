export function picturesMurkup(hits) {
  console.log(hits);
  return hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="gallery__item">
            <a href="${largeImageURL}" class="gallery__link link">
                <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" width="370" height="294"/>
                <div class="info">
                    <p class="info-item">
                    <b>Likes</b>${likes}
                    </p>
                    <p class="info-item">
                    <b>Views</b>${views}
                    </p>
                    <p class="info-item">
                    <b>Comments</b>${comments}
                    </p>
                    <p class="info-item">
                    <b>Downloads</b>${downloads}
                    </p>
                </div>
            </a>
        </div>`;
      }
    )
    .join();
}
