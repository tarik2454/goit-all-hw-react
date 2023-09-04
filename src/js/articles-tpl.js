export default function createArticlesMarkup(articles) {
  return articles
    .map(article => {
      return `        
      <li class="articles__item">
        <a class="articles__link" href="${article.url}" target="_blank" rel="noopener noreferrer">
          <article class="article__contant">
              <img class="article__img" src="${article.urlToImage}" alt="" width="480" />
              <h2 class="article__title">${article.title}</h2>
              <p class="article__autor">Poster by: ${article.author}</p>
              <p class="article__description">${article.description}</p>
          </article>
        </a>
      </li>`;
    })
    .join('');
}
