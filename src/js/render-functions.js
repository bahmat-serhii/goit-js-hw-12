import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function renderImages(images) {
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="photo-card">
          <a href="${largeImageURL}">
            <img class="photo-img" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${likes}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${views}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${downloads}
            </p>
          </div>
        </li>`
    )
    .join('');

  new SimpleLightbox('.gallery a').refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function toggleLoader(isVisible) {
  const loader = document.querySelector('.loader');
  if (isVisible) {
    loader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
  }
}
export function toggleLoadMore(isVisible) {
  const loadMore = document.querySelector('.load-more');
  if (isVisible) {
    loadMore.classList.remove('hidden');
  } else {
    loadMore.classList.add('hidden');
  }
}

export function scrollPage() {
  const firstCard = document.querySelector('.gallery').firstElementChild;
  if (!firstCard) return;

  const cardHeight = firstCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
