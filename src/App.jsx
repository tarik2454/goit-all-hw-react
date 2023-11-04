import React from 'react';
import { Layout } from 'components/Layout/Layout';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { SearchMovies } from 'pages/Movies/SearchMovies';
import { NotFound } from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { HomeMovies } from 'pages/Movies/HomeMovies';
import { Cast } from './components/Movies/Cast/Cast';
import { Reviews } from './components/Movies/Reviews/Reviews';
import { TopMovies } from 'pages/Movies/TopMovies';
import { styled } from 'styled-components';
import { MovieDetails } from './pages/Movies/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home-movies" element={<HomeMovies />} />
        <Route path="/top-movies" element={<TopMovies />} />
        <Route path="/search-movies" element={<SearchMovies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StyledListItem = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 15px) / 3);
  }

  @media screen and (min-width: 1400px) {
    width: calc((100% - 3 * 15px) / 4);
  }
`;

export const StyledImage = styled.img`
  margin-bottom: 3px;
  border-radius: ${props => props.theme.$borderRadius};
`;
