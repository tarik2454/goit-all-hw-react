import { MoviesList } from 'modules/Movies/componets/MoviesList/MoviesList';
import { Container } from 'components/common/component/Container/Container';
import { Form } from 'components/common/component/Form/Form';

import { Section } from 'components/common/component/Section/Section';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/Movies/movies-api-services';
import { styled } from 'styled-components';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [value, setValue] = useState(query);

  useEffect(() => {
    // if (!query) {
    //   return;
    // }

    async function fetchMovieByName() {
      try {
        const data = await getMovieByName(value);
        setMovies(data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchMovieByName();
  }, [query, value]);

  const handleSearch = event => {
    event.preventDefault();
    setSearchParams(value ? { query: value } : {});
  };

  return (
    <Section title="Search Movies">
      <Container>
        <StyledForm onSubmit={handleSearch}>
          <Form
            as="input"
            type="text"
            value={value}
            onChange={event => {
              setValue(event.target.value);
            }}
            placeholder="Enter movie name..."
          />
        </StyledForm>

        <MoviesList movies={movies} />
      </Container>
    </Section>
  );
};

export const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export default SearchMovies;
