import { useEffect, useState } from 'react';
import { Main } from 'pages/Movies/Movies.styled';
import { MoviesList } from 'components/moviesList/MoviesList';
import { fetchMovie } from 'services/fetchMovie';
import { TitleCard } from 'components/App.styled';

const MyFavoriteMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(setMovies);
  }, []);

  return (
    <Main>
      <TitleCard>My Favorite Movies</TitleCard>
      {movies && <MoviesList movies={movies} />}
    </Main>
  );
};
export default MyFavoriteMovies;
