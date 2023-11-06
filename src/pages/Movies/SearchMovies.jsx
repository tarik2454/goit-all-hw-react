import { MoviesList } from 'components/Movies/MoviesList';
import { Section } from 'components/common/Section/Section';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/Movies/movies-api-services';
import { styled } from 'styled-components';
import { GlobalStyledContainer, GlobalStyledInput } from 'styles/GlobalStyle';

export const SearchMovies = () => {
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
      <GlobalStyledContainer>
        <StyledForm onSubmit={handleSearch}>
          <GlobalStyledInput
            type="text"
            value={value}
            onChange={event => {
              setValue(event.target.value);
            }}
            placeholder="Enter movie name..."
          />
        </StyledForm>

        <MoviesList movies={movies} />
      </GlobalStyledContainer>
    </Section>
  );
};

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;
