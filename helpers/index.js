import NewsApiService from './news-api-sevice';
import createArticlesMarkup from './articles-tpl';

const searchForm = document.querySelector('#search-form');
const articlesContainer = document.querySelector('#articlesDetails');
const sentinel = document.querySelector('#sentinel');

const newsApiService = new NewsApiService();

searchForm.addEventListener('submit', onSearchSubmit);

// window.onload = function () {
//   return fetch(
//     'https://newsapi.org/v2/top-headlines?country=us&apiKey=76ef724f356f4faeab61f82f3d092742'
//   )
//     .then(response => response.json())
//     .then(data => {
//       appendArticlesMarkup(data.articles);
//     });
// };

function onSearchSubmit(event) {
  event.preventDefault();

  newsApiService.searchQwery = event.currentTarget.elements.query.value.trim();

  clearArticlesContainer();

  newsApiService
    .fetchArticles()
    .then(articles => {
      appendArticlesMarkup(articles);
    })
    .catch(error => {
      console.warn(error);
    });
}

function appendArticlesMarkup(articles) {
  articlesContainer.insertAdjacentHTML(
    'beforeend',
    createArticlesMarkup(articles)
  );
}

function clearArticlesContainer() {
  articlesContainer.innerHTML = '';
}

let page = 1;

const onEntry = entryes => {
  entryes.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=4&page=${page}&apiKey=76ef724f356f4faeab61f82f3d092742`
    )
      .then(response => response.json())
      .then(data => {
        page += 1;
        appendArticlesMarkup(data.articles);
      });
  });
};

const options = {
  rootMargin: '300px',
};

const observer = new IntersectionObserver(onEntry, options);
observer.observe(sentinel);
