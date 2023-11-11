import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/Movies/movies-api-services';
import { MoviesList } from 'components/Movies/MoviesList';
import { Section } from 'components/common/Section/Section';
import { Container } from 'components/common/Container/Container';

const TopMovies = () => {
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
      <Container>
        <MoviesList movies={movies} />
      </Container>
    </Section>
  );
};

export default TopMovies;
