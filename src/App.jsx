import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { styled } from 'styled-components';

import { Cast } from './components/Movies/Cast/Cast';
import { Reviews } from './components/Movies/Reviews/Reviews';
import { Layout } from 'components/Layout/Layout';

const HomeMovies = lazy(() => import('pages/Movies/HomeMovies'));
const Contacts = lazy(() => import('pages/Contacts'));
const TopMovies = lazy(() => import('pages/Movies/TopMovies'));
const MovieDetails = lazy(() =>
  import('./pages/Movies/MovieDetails/MovieDetails')
);
const Home = lazy(() => import('./pages/Home'));
const SearchMovies = lazy(() => import('pages/Movies/SearchMovies'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <Suspense>
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
    </Suspense>
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
