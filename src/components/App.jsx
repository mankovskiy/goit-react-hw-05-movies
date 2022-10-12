import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import { Movies } from '../pages/Movies/Movies';
// import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
// import { MovieDetails } from 'pages/movieDetails/MovieDetails';
// import { Reviews } from './reviews/Reviews';
// import { Cast } from './cast/Cast';
import { SharedLayout } from './SharedLayout';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/movieDetails/MovieDetails'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Cast = lazy(() => import('./cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
