import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'components/fetchMovie';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, popularity, overview, genres } = movie;

  return (
    <section>
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
        {/* {!poster_path&&(<img src="https://via.placeholder.com/250x200" alt="">)  } */}
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};
