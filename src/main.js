import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  toggleLoader,
  toggleLoadMore,
  scrollPage,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = input.value.trim();
  input.value = '';
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
    return;
  }
  page = 1;
  clearGallery();
  toggleLoader(true);
  toggleLoadMore(false);

  try {
    const data = await fetchImages(query, page);
    if (data.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderImages(data.hits);
      toggleLoadMore(true);
    }
  } catch {
    iziToast.error({ title: 'Error', message: 'Something went wrong!' });
  } finally {
    toggleLoader(false);
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  toggleLoader(true);

  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);

    scrollPage();
    if (page * 15 >= data.totalHits) {
      toggleLoadMore(false);
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch {
    iziToast.error({ title: 'Error', message: 'Something went wrong!' });
  } finally {
    toggleLoader(false);
  }
});

const classBtn = document.querySelector('button');
classBtn.classList.add('form-btn');
const classInput = document.querySelector('input');
classInput.classList.add('form-input');
const classBtnMore = document.querySelector('.load-more');
classBtnMore.classList.add('form-btn-more');
