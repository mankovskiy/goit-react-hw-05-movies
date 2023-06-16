import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { NotFound } from '../pages/NotFound/NotFound';
import { SharedLayout } from './sharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';
import MyFavoriteMovies from 'pages/MyFavoriteMovies/MyFavoriteMovies';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/movieDetails/MovieDetails'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Cast = lazy(() => import('./cast/Cast'));
// const MyFavoriteMovies = lazy(() =>
//   import('../pages/MyFavoriteMovies/MyFavoriteMovies')
// );

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="myMovies" element={<MyFavoriteMovies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
