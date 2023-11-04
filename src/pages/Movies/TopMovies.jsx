import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/Movies/movies-api-services';

import {
  GlobalStyledContainer,
  GlobalStyledH1,
  GlobalStyledSection,
} from 'styles/GlobalStyle';
import { MoviesList } from 'components/Movies/MoviesList';

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
      <GlobalStyledContainer>
        <GlobalStyledH1>Trending movies</GlobalStyledH1>
        <MoviesList movies={movies} />
      </GlobalStyledContainer>
    </GlobalStyledSection>
  );
};
