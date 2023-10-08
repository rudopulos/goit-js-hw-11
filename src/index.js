import axios from 'axios';
import Notiflix from 'notiflix';

const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');

let page = 1;

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchQuery = e.target.searchQuery.value.trim();

  gallery.innerHTML = '';
  page = 1;

  if (searchQuery === '') {
    return;
  }

  const apiKey = '39892838-9daa7d960265e10dbeb74eed6'; 
  const perPage = 40;

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });

    const data = response.data;

    if (data.hits.length === 0) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }

    data.hits.forEach((image) => {
      const photoCard = document.createElement('div');
      photoCard.classList.add('photo-card');

      const img = document.createElement('img');
      img.src = image.webformatURL;
      img.alt = image.tags;
      img.loading = 'lazy';

      const info = document.createElement('div');
      info.classList.add('info');

      const likes = document.createElement('p');
      likes.classList.add('info-item');
      likes.innerHTML = `<b>Likes:</b> ${image.likes}`;

      const views = document.createElement('p');
      views.classList.add('info-item');
      views.innerHTML = `<b>Views:</b> ${image.views}`;

      const comments = document.createElement('p');
      comments.classList.add('info-item');
      comments.innerHTML = `<b>Comments:</b> ${image.comments}`;

      const downloads = document.createElement('p');
      downloads.classList.add('info-item');
      downloads.innerHTML = `<b>Downloads:</b> ${image.downloads}`;

      info.appendChild(likes);
      info.appendChild(views);
      info.appendChild(comments);
      info.appendChild(downloads);

      photoCard.appendChild(img);
      photoCard.appendChild(info);

      gallery.appendChild(photoCard);
    });

    loadMoreButton.style.display = 'block';

    const totalHits = data.totalHits;
    if (page * perPage >= totalHits) {
      loadMoreButton.style.display = 'none';
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

loadMoreButton.addEventListener('click', async () => {
  page++;

  const searchQuery = searchForm.searchQuery.value.trim();
  const apiKey = '39892838-9daa7d960265e10dbeb74eed6'; 
  const perPage = 40;

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });

    const data = response.data;

    data.hits.forEach((image) => {
      const photoCard = document.createElement('div');
      photoCard.classList.add('photo-card');

      const img = document.createElement('img');
      img.src = image.webformatURL;
      img.alt = image.tags;
      img.loading = 'lazy';

      const info = document.createElement('div');
      info.classList.add('info');

      const likes = document.createElement('p');
      likes.classList.add('info-item');
      likes.innerHTML = `<b>Likes:</b> ${image.likes}`;

      const views = document.createElement('p');
      views.classList.add('info-item');
      views.innerHTML = `<b>Views:</b> ${image.views}`;

      const comments = document.createElement('p');
      comments.classList.add('info-item');
      comments.innerHTML = `<b>Comments:</b> ${image.comments}`;

      const downloads = document.createElement('p');
      downloads.classList.add('info-item');
      downloads.innerHTML = `<b>Downloads:</b> ${image.downloads}`;

      info.appendChild(likes);
      info.appendChild(views);
      info.appendChild(comments);
      info.appendChild(downloads);

      photoCard.appendChild(img);
      photoCard.appendChild(info);

      gallery.appendChild(photoCard);
    });

    const totalHits = data.totalHits;
    if (page * perPage >= totalHits) {
      loadMoreButton.style.display = 'none';
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

data.hits.forEach((image) => {
    const photoCard = document.createElement('div');
    photoCard.classList.add('photo-card');
  
    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.loading = 'lazy';
  
    const info = document.createElement('div');
    info.classList.add('info');
  
    const likes = document.createElement('span');
    likes.classList.add('info-item');
    likes.textContent = image.likes;
  
    const views = document.createElement('span');
    views.classList.add('info-item');
    views.textContent = image.views;
  
    const comments = document.createElement('span');
    comments.classList.add('info-item');
    comments.textContent = image.comments;
  
    const downloads = document.createElement('span');
    downloads.classList.add('info-item');
    downloads.textContent = image.downloads;
  
    info.appendChild(likes);
    info.appendChild(views);
    info.appendChild(comments);
    info.appendChild(downloads);
  
    photoCard.appendChild(img);
    photoCard.appendChild(info);
  
    gallery.appendChild(photoCard);
  });
  
  const likes = document.createElement('span');
likes.classList.add('info-item');
likes.innerHTML = `<b>Likes:</b> ${image.likes}`;

const views = document.createElement('span');
views.classList.add('info-item');
views.innerHTML = `<b>Views:</b> ${image.views}`;

const comments = document.createElement('span');
comments.classList.add('info-item');
comments.innerHTML = `<b>Comments:</b> ${image.comments}`;

const downloads = document.createElement('span');
downloads.classList.add('info-item');
downloads.innerHTML = `<b>Downloads:</b> ${image.downloads}`;

