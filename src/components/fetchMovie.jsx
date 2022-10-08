import axios from 'axios';

export async function fetchMovie() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=35e417e69f137291206951efd172c8b1'
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
