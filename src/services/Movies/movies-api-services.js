const BASE_URL = 'https://api.themoviedb.org/3';
const searchParams = new URLSearchParams({
  api_key: '1013c52116bedf0103542a409c4e960e',
  language: 'en-US',
  include_adult: false,
});

export const getTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/all/day?${searchParams}`);
  const data = await response.json();
  return data.results;
};

export const getMovieByName = async name => {
  const response = await fetch(
    `${BASE_URL}/search/movie?${searchParams}&query=${name}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async movieId => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?${searchParams}`);
  const data = await response.json();
  return data;
};

// export const getCastMovie = async movieId => {
//   const { data } = await axios.get(`/movie/${movieId}/credits?${searchParams}`);

//   return data.cast;
// };

// export const getReviewsMovie = async movieId => {
//   const { data } = await axios.get(`/movie/${movieId}/reviews?${searchParams}`);

//   return data.results;
// };
