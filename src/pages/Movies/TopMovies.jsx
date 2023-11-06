import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/Movies/movies-api-services';

import { GlobalStyledContainer } from 'styles/GlobalStyle';
import { MoviesList } from 'components/Movies/MoviesList';
import { Section } from 'components/common/Section/Section';

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
    <Section title="Trending movies">
      <GlobalStyledContainer>
        <MoviesList movies={movies} />
      </GlobalStyledContainer>
    </Section>
  );
};
