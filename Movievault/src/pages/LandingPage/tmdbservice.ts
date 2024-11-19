import axios from 'axios';

const API_KEY = 'b0c79de69708e4eeab63adc57a0b0477';
const BASE_URL = 'https://api.themoviedb.org/3';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genreNames: string;
  vote_average: number;
  genre_ids: number[];
}

interface MovieWithGenres extends Movie {
  genreNames: string; 
}

interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
}



export const fetchTrendingMovies = async (): Promise<MovieWithGenres[]> => {
  try {
    const response = await axios.get<{ results: Movie[] }>(`${BASE_URL}/trending/movie/week`, {
      params: {
        api_key: API_KEY,
      },
    });

    const moviesWithGenres: MovieWithGenres[] = response.data.results.map(movie => ({
      ...movie,
      genreNames: movie.genre_ids.map((id:any) => getGenreName(id)).join(', '),
    }));

    return moviesWithGenres;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

const getGenreName = (id: number): string => {
  const genreList: Record<number, string> = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };

  return genreList[id] || 'Unknown';
};

export const fetchMovieDetails = async (movieId: number): Promise<MovieDetails | null> => {
  try {
    const response = await axios.get<MovieDetails>(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
