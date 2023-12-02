import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { styled } from 'styled-components';

import { Cast } from './modules/Movies/componets/Cast/Cast';
import { Reviews } from './modules/Movies/componets/Reviews/Reviews';
import { Layout } from './shared/Layout/Layout';
import { PrivateRoute } from 'shared/routes/PrivateRoute';
import { PublicRoute } from 'shared/routes/PublicRoute';

const Signin = lazy(() => import('pages/Signin/Signin'));
const HomeMovies = lazy(() => import('./pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const TopMovies = lazy(() => import('./pages/Movies/TopMovies'));
const MovieDetails = lazy(() =>
  import('./pages/Movies/MovieDetails/MovieDetails')
);
const Home = lazy(() => import('./pages/Home/Home'));
const SearchMovies = lazy(() => import('pages/Movies/SearchMovies'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const LeaveRequestForm = lazy(() =>
  import('pages/LeaveRequestForm/LeaveRequestForm')
);

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(true);
  };

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

          <Route
            path="/signin"
            element={
              <PublicRoute isLoggedIn={isLoggedIn}>
                <Signin handleClick={handleClick} />
              </PublicRoute>
            }
          />

          <Route
            path="/leave-request"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <LeaveRequestForm />
              </PrivateRoute>
            }
          />

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
