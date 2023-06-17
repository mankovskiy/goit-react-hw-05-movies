import { useEffect, useState } from 'react';
import { Main } from 'pages/Movies/Movies.styled';
import { Title } from 'components/App.styled';
import { MoviesList } from 'components/moviesList/MoviesList';
import { fetchMovie } from 'services/fetchMovie';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(setMovies);
  }, []);

  return (
    <Main>
      <Title>Trending today</Title>
      {movies && <MoviesList movies={movies} />}
    </Main>
  );
};
export default Home;
