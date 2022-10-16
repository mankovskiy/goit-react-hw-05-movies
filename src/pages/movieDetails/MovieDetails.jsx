import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/fetchMovie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // const backTo = backLinkHref.pathname === '/' ? 'Home' : 'Movies';
  // console.log(backLinkHref);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, popularity, overview, genres } = movie;

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <h1>{title}</h1>
      <p>User Score: {Math.round(`${popularity}`)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map(({ name, id }) => {
          if (!genres) {
            return 'no genre';
          }
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <div>
        <img
          src={
            !poster_path
              ? 'https://via.placeholder.com/250x200'
              : `https://image.tmdb.org/t/p/w500${poster_path}`
          }
          alt=""
        />
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    popularity: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};

export default MovieDetails;
