import { Moviecard } from '../MovieCard/Moviecard';
import './landingpage.css' 
import { useEffect, useState, useRef } from 'react';
import { fetchTrendingMovies, searchMovies } from './tmdbservice';
import { Layout } from '../../components/Dashboard/layout';
import background from '../../assets/Navbar/back.webp'
import { useLocation } from 'react-router-dom';



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
  
  const location = useLocation();
  const query = location.state?.query || ''; 
  const searchResults = location.state?.results || []; 
  const [movies, setMovies] = useState<MovieWithGenres[]>(searchResults);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [watchlist, setWatchlist] = useState<MovieWithGenres[]>([]); // Watchlist state
    const genreContainerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
      const fetchMovies = async () => {
        if (query) {
          const searchResults = await searchMovies(query); 
          setMovies(searchResults);
        } else {
          const trendingMovies = await fetchTrendingMovies(); 
          setMovies(trendingMovies);
        }
      };
  
      fetchMovies();
    }, [query]);


    const handleAddToWatchlist = (movie: MovieWithGenres) => {
      setWatchlist((prev) =>
        prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
      );
      alert(`${movie.title} has been added to your watchlist!`);
    };
  

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

    const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genreNames.includes(selectedGenre))
    : movies;

    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') || '';

    useEffect(() => {
      const getMovies = async () => {
        if (searchQuery) {
          const moviesData = await fetchTrendingMovies(); 
          setMovies(
            moviesData.filter((movie: MovieWithGenres) =>
              movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
        } else {
          const moviesData = await fetchTrendingMovies();
          setMovies(moviesData);
        }
      };
    
      getMovies();
    }, [searchQuery]);
    

  
  const handleCardClick = (title: string) => {
    alert(`You clicked on ${title}`);
  };


  return (
    <Layout headerText="Your Gateway to Unlimited Cinema Magic!" headerBg={background}>
        <div className='homecontainer'>
          
          <div className='genre'>
            <button 
            type='submit' 
            title='scroll' 
            className="scroll-button left" 
            onClick={() => scrollCategory(-200)}>
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
                <button 
                type='submit' 
                title='scroll' 
                className="scroll-button right" 
                onClick={() => scrollCategory(200)}>
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
                  onAddToWatchlist={() =>
                    handleAddToWatchlist({
                      id: movie.id,
                    title: movie.title,
                    poster_path: movie.poster_path,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    genreNames: movie.genreNames,
                    vote_average: movie.vote_average,
                    })
                  }
                />
              ))}
            </div>
          </div>
    </Layout>
  );
};
