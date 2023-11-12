import { MoviesList } from 'components/Movies/MoviesList';
import { Container } from 'components/common/Container/Container';
import { Section } from 'components/common/Section/Section';

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
          <StyledInput
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
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  max-width: 400px;
  height: 35px;
  margin-bottom: 20px;
  padding: 5px 12px;
  color: inherit;
  border: 1px solid gray;
  border-radius: ${({ theme }) => theme.input.$borderRadius};

  &:focus {
    outline: transparent;
    border: 1px solid teal;
  }
`;

export default SearchMovies;
