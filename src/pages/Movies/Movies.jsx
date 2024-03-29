import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/fetchMovie';
import { SearchBox } from 'components/searchBox/SearchBox';
import { MoviesList } from 'components/moviesList/MoviesList';
import { TitleCard } from 'components/App.styled';
const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie') ?? '';

  useEffect(() => {
    if (!movie) return;

    fetchSearchMovie(movie).then(r => setSearchMovie(r));
  }, [movie]);

  const handleSubmit = e => {
    e.preventDefault();
    const queryMovie = e.target.elements.movie.value;

    setSearchParams(queryMovie !== '' ? { movie: queryMovie } : '');
  };

  return (
    <main>
      <TitleCard>Movies</TitleCard>
      <SearchBox onSubmit={handleSubmit} value={movie} />
      {searchMovie.length > 0 && <MoviesList movies={searchMovie} />}
    </main>
  );
};

export default Movies;
