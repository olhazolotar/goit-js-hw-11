export function renderGalleryMurkup(getPictures) { 
  for (const getPicture of getPictures) {
    // const { webformatURL, tags, downloads, likes, views, comments } = getPicture;
    
    return getPictures.map(getPicture => `<div class="photo-card">
  <img src="${getPicture.webformatURL}" alt="${getPicture.tags}" loading="lazy"
  width="392" height="264"/>
  <div class="info">
    <p class="info-item">
      <b>Likes: <span class="nums">${getPicture.likes}</span>   </b>
    </p>
    <p class="info-item">
      <b>Views: <span class="nums">${getPicture.views}</span></b>
    </p>
    <p class="info-item">
      <b>Comments: <span class="nums">${getPicture.comments}</span></b>
    </p>
    <p class="info-item">
      <b>Downloads: <span class="nums">${getPicture.downloads}</span></b>
    </p>
  </div>
</div>`).join('');
    console.log(getPicture.likes);
  } 
  
}

