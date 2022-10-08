import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchMovie } from './fetchMovie';

// https://api.themoviedb.org/3/movie/550?api_key=35e417e69f137291206951efd172c8b1

// axios.defaults.baseURL = 'api.themoviedb.org/3/movie/550?';
// axios.defaults.headers.common['35e417e69f137291206951efd172c8b1'] = api_key;

export const HomeMovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(setMovies);
  }, []);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
