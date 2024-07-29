import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const searchParams = new URLSearchParams({
  api_key: '1013c52116bedf0103542a409c4e960e',
  language: 'en-US',
  include_adult: false,
});

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/day?${searchParams}`
  );
  return data.results;
};

export const getMovieByName = async name => {
  const response = await fetch(
    `${BASE_URL}/search/movie?${searchParams}&query=${name}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = movieId => {
  return fetch(`${BASE_URL}/movie/${movieId}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data;
    });
};

export const getCastMovie = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?${searchParams}`
  );
  const data = await response.json();
  return data.cast;
};

export const getReviewsMovie = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?${searchParams}`
  );
  const data = await response.json();
  return data.results;
};
