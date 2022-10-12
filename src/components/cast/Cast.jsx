import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/fetchMovie';

const Cast = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState(null);
  console.log(casts);
  useEffect(() => {
    fetchMovieCast(movieId).then(setCasts);
  }, [movieId]);

  if (!casts) {
    return null;
  }

  return (
    <section>
      <ul>
        {casts.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={
                !profile_path
                  ? 'https://via.placeholder.com/250x200'
                  : `https://image.tmdb.org/t/p/w500${profile_path}`
              }
              alt=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
            {/* <Link to={`/movies/${id}`}>{title}</Link> */}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Cast;
