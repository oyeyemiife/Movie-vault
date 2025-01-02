import React from 'react'
import './moviecard.css'
import { StarIcon, WatchlistIcon } from '../../assets/svg/svg-export';

type MovieCardProps = {
    title: string;
    posterUrl: string;
    year : string;
    rating: number;
    genre: string;
    onClick?: () => void; 
    onAddToWatchlist: () => void;
  };



  export const Moviecard: React.FC<MovieCardProps> = ({ title, posterUrl,year, rating, genre, onClick, onAddToWatchlist }) => {
    return (
        <div className="movie-card" onClick={onClick}>
        <img src={posterUrl} alt={title} className="movie-poster" />
        <div className='movieinfo'>
        <p className="movie-title">{title}</p>
        <p className='movie-title'>{year}</p>
        <p className="movie-genre">{genre}</p>
        <p className="movie-rating"><StarIcon/> {rating.toFixed(1)}</p>
        <p onClick={onAddToWatchlist} title='watchlist'><WatchlistIcon/></p>
    </div>
    </div>
  )
}
