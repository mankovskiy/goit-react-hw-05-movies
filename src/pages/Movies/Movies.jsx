import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'components/fetchMovie';
import { SearchBox } from 'components/searchBox/SearchBox';
import { MoviesList } from 'components/moviesList/MoviesList';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie');

  useEffect(() => {
    if (!movie) {
      return;
    }

    fetchSearchMovie(movie).then(r => setSearchMovie(r));
  }, [movie]);

  const handleSubmit = e => {
    e.preventDefault();
    const queryMovie = e.target.elements.movie.value;
    setSearchParams(queryMovie !== '' ? { movie: queryMovie } : '');
  };

  return (
    <main>
      <h1>Movies</h1>
      <SearchBox onSubmit={handleSubmit} />
      {searchMovie.length > 0 && <MoviesList movies={searchMovie} />}
    </main>
  );
};

export default Movies;
