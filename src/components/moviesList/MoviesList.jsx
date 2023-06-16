import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieGallery } from './MoviesList.styled';
import { MovieItem } from 'pages/movieDetails/MovieDetails.styled';

import { CardTitle } from './MoviesList.styled';
// import { Link } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieGallery>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              width="100"
              src={
                !poster_path
                  ? 'https://via.placeholder.com/250x200'
                  : `https://image.tmdb.org/t/p/w500${poster_path}`
              }
              alt="Girl in a jacket"
            />
            <CardTitle>{title}</CardTitle>
          </Link>
        </MovieItem>
      ))}
    </MovieGallery>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
