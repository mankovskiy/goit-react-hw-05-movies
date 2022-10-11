import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'components/fetchMovie';
import { SearchBox } from 'components/searchBox/SearchBox';
import { MoviesList } from 'components/moviesList/MoviesList';

export const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie');

  console.log(movie);

  useEffect(() => {
    if (!movie) {
      return;
    }
    fetchSearchMovie(movie).then(r => setSearchMovie(r));
  }, [movie]);

  // const updateQueryString = value => {
  //   console.log(value);
  //   setSearchParams(value !== '' ? { movie: value } : {});
  // };

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
