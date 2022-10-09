import axios from 'axios';

export async function fetchMovie() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=35e417e69f137291206951efd172c8b1'
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=35e417e69f137291206951efd172c8b1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCast(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=35e417e69f137291206951efd172c8b1`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieReviews(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=35e417e69f137291206951efd172c8b1&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
