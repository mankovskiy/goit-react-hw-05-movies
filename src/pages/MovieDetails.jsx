import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <section>
      <h1>MovieDetails</h1>
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
