// import { fetchMovie } from 'components/fetchMovie';
import { HomeMovieList } from 'components/HomeMovieList';

export const Home = () => {
  // const movies = fetchMovie();

  return (
    <main>
      <h1>Trending today</h1>
      <HomeMovieList />
    </main>
  );
};
