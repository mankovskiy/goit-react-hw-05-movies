import { useEffect, useState } from 'react';

import { MoviesList } from 'components/moviesList/MoviesList';
import { fetchMovie } from 'services/fetchMovie';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(setMovies);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};
export default Home;
