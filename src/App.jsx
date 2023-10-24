import { Layout } from 'components/Layout/Layout';
import { Cast } from 'components/Movies/Cast';
import { Reviews } from 'components/Movies/Reviews';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/Movies/MovieDetails';
import { SearchMovies } from 'pages/SearchMovies';
import { TopMovies } from 'pages/Movies/TopMovies';
import { NotFound } from 'pages/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

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
