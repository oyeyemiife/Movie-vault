import { Moviecard } from '../MovieCard/Moviecard';
import './landingpage.css' 
import { useEffect, useState, useRef } from 'react';
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
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

    const genreContainerRef = useRef<HTMLDivElement>(null);

const scrollCategory = (scrollOffset: number) => {
  if (genreContainerRef.current) {
    genreContainerRef.current.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  }
};

    const genres = [
      'Action',
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
    ];
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

  const filteredMovies = selectedGenre
    ? movies.filter(movie => movie.genreNames.includes(selectedGenre))
    : movies;

  return (
    <Layout headerText="Your Gateway to Unlimited Cinema Magic!" headerBg={background}>
        <div className='homecontainer'>
            <div className='genre'>
            <button type='submit' title='scroll' className="scroll-button left" onClick={() => scrollCategory(-600)}>
        &#8249;
      </button>
      <div className="recommendation-container" ref={genreContainerRef}>
                {genres.map((category) => (
              <div key={category} className={`recommendation ${selectedGenre===category? 'active' : ''}`}
              onClick={() => setSelectedGenre(category === selectedGenre ? null : category)}
              >
                  <p>{category}</p>
                </div>
              ))}
                </div>
                <button type='submit' title='scroll' className="scroll-button right" onClick={() => scrollCategory(600)}>
        &#8250;
      </button>
      </div>
        <div className='movies'>
        {filteredMovies.map((movie:MovieWithGenres) => (
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
