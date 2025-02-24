import './madeforyou.css'
import { useEffect, useRef, useState } from 'react'
import { Layout } from '../../components/Dashboard/layout'
import background from '../../assets/Navbar/back.webp'
import { Moviecard } from '../MovieCard/Moviecard'
import { fetchTrendingMovies } from '../LandingPage/tmdbservice'
import { useWatchlist } from '../../components/watchlistContext'
import React from 'react'

interface MovieWithMood {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    genreNames: string[];
    vote_average: number;
}

export const Madeforyou = () => {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);
    const [movies, setMovies] = useState<MovieWithMood[]>([]);
    const genreContainerRef = useRef<HTMLDivElement>(null);
    const { addToWatchlist } = useWatchlist();

    const moods = [
        'Happy', 'Sad', 'Emotional', 'Funny', 'Uplifting',
        'Weird', 'Dark', 'Intense', 'Slow', 'Thrilling', 'Dramatic'
    ];

    const moodToGenreMap: Record<string, string[]> = {
        Happy: ['Comedy', 'Family'],
        Sad: ['Drama', 'Romance'],
        Emotional: ['Drama', 'Romance'],
        Funny: ['Comedy'],
        Uplifting: ['Family', 'Adventure'],
        Weird: ['Fantasy', 'Science Fiction'],
        Dark: ['Horror', 'Thriller'],
        Intense: ['Thriller', 'Action'],
        Slow: ['Drama'],
        Thrilling: ['Thriller', 'Action'],
        Dramatic: ['Drama']
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const trendingMovies = await fetchTrendingMovies();
                const processedMovies = trendingMovies.map((movie: any) => ({
                    ...movie,
                    genreNames: Array.isArray(movie.genreNames) 
                        ? movie.genreNames 
                        : movie.genreNames.split(',').map((genre: string) => genre.trim())
                }));
                setMovies(processedMovies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    const handleAddToWatchlist = (movie: MovieWithMood) => {
        addToWatchlist({
            ...movie,
            genreNames: movie.genreNames.join(', ')
        });
        alert(`${movie.title} has been added to your watchlist!`);
    };

    const scrollCategory = (scrollOffset: number) => {
        if (genreContainerRef.current) {
            genreContainerRef.current.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    };

    const filteredMovies = selectedMood
        ? movies.filter((movie) =>
            moodToGenreMap[selectedMood]?.some((genre) =>
                movie.genreNames.includes(genre)
            )
        )
        : movies;

    const handleCardClick = (title: string) => {
        alert(`You clicked on ${title}`);
    };

    return (
        <Layout headerText="Made For You!" headerBg={background}>
            <div>
                <div className='genre'>
                    <button
                        type='button'
                        className="scroll-button left"
                        onClick={() => scrollCategory(-200)}
                    >
                        &#8249;
                    </button>
                    <div className="recommendation-container" ref={genreContainerRef}>
                        {moods.map((mood) => (
                            <div
                                key={mood}
                                className={`recommendation ${selectedMood === mood ? 'active' : ''}`}
                                onClick={() => setSelectedMood(mood === selectedMood ? null : mood)}
                            >
                                <p>{mood}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        type='button'
                        className="scroll-button right"
                        onClick={() => scrollCategory(200)}
                    >
                        &#8250;
                    </button>
                </div>
                <div className="movies">
                    {filteredMovies.length ? (
                        filteredMovies.map((movie) => (
                            <Moviecard
                                key={movie.id}
                                title={movie.title}
                                posterUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                year={movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                                rating={movie.vote_average}
                                genre={Array.isArray(movie.genreNames) ? movie.genreNames.join(', ') : movie.genreNames}
                                onClick={() => handleCardClick(movie.title)}
                                onAddToWatchlist={() => handleAddToWatchlist(movie)}
                            />
                        ))
                    ) : (
                        <p className="no-movies-message">No movies match the selected mood.</p>
                    )}
                </div>
            </div>
        </Layout>
    )
}


