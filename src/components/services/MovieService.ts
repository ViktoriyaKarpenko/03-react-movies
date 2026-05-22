import axios from 'axios';
import type { Movie } from '../../types/movie';

interface MoviesHttpResponse {
  results: Movie[];
}

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesHttpResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  return response.data.results;
};
export default fetchMovies;
