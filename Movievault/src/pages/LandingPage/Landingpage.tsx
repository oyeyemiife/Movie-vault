import { Moviecard } from '../MovieCard/Moviecard';
import './landingpage.css' 
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from './tmdbservice';
import { Layout } from '../../components/Dashboard/layout';
import background from '../../assets/Navbar/back.webp'



interface MovieWithGenres {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    genreNames: string;
    vote_average: number;
  }
export const Landingpage = () => {

    const [movies, setMovies] = useState<MovieWithGenres[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchTrendingMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  
  const handleCardClick = (title: string) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <Layout headerText="Your Gateway to Unlimited Cinema Magic!" headerBg={background}>
        <div className='homecontainer'>
            <div className='sdf'>
            {[ 'Action',
                'Adventure',
                'Animation',
                'Comedy',
                'Crime',
                'Documentary',
                'Drama',
                'Family',
                'Fantasy',
                'History',
                'Horror',
                'Mystery',
                'Romance',
                'Science Fiction',
                'Thriller',
                'Western'
            ].map((category) => (
            <div key={category} className="recommendation">
              <p>{category}</p>
            </div>
          ))}
            </div>
        <div className='movies'>
      {movies.map((movie:any) => (
        <Moviecard
          key={movie.id}
          title={movie.title}
          posterUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          year={movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
          rating={movie.vote_average}
          genre={movie.genreNames}
          onClick={() => handleCardClick(movie.title)}
        />
      ))}
      </div>
    </div>
    </Layout>
  );
};
