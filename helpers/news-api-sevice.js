const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = '76ef724f356f4faeab61f82f3d092742';

export default class NewsApiService {
  constructor() {
    this.searchQwery = '';
    this.page = 1;
  }

  fetchArticles() {
    const searchParams = new URLSearchParams({
      q: this.searchQwery,
      pageSize: 4,
      page: this.page,
    });

    const url = `${BASE_URL}everything?${searchParams.toString()}&apiKey=${API_KEY}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();

        return data.articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }
}
