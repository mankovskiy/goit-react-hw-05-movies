import { useEffect, useState } from 'react';
import { Main } from 'pages/Movies/Movies.styled';

import { MoviesList } from 'components/moviesList/MoviesList';
import { fetchMovie } from 'services/fetchMovie';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(setMovies);
  }, []);

  return (
    <Main>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </Main>
  );
};
export default Home;
