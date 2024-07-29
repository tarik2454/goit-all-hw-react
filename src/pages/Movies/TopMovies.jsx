import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../modules/Movies/services/movies-api-services';
import { MoviesList } from '../../modules/Movies/componets/MoviesList/MoviesList';
import { Section } from '../../shared/components/Section/Section';
import { Container } from '../../shared/components/Container/Container';

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
