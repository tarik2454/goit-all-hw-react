import { MoviesList } from 'components/Movies/MoviesList';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/Movies/movies-api-services';

import { GlobalStyledH1, GlobalStyledSection } from 'styles/GlobalStyle';

export const TopMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <GlobalStyledSection>
      <GlobalStyledH1>Top movies</GlobalStyledH1>
      <MoviesList movies={movies} />
    </GlobalStyledSection>
  );
};
