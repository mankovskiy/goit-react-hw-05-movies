import { useEffect, useState } from 'react';
import { Main } from 'pages/Movies/Movies.styled';

import { MoviesList } from 'components/moviesList/MoviesList';
import { fetchMovie } from 'services/fetchMovie';

const MyFavoriteMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(setMovies);
  }, []);

  return (
    <Main>
      <h1>My Favorite Movies</h1>
      {movies && <MoviesList movies={movies} />}
    </Main>
  );
};
export default MyFavoriteMovies;
