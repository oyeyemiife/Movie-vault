import React from 'react';
import { Moviecard } from '../MovieCard/Moviecard';
import './landingpage.css'
// import {Navbar} from '../../components/Navbar/navbar'
import { Layout } from '../../components/Dashboard/layout';
import background from '../../assets/Navbar/back.webp'

const movies = [
  {
    title: "Inception",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
    year: "2010",
    rating: 8.8,
    genre: "Sci-Fi",
  },
  {
    title: "Inception",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
    year: "2010",
    rating: 8.8,
    genre: "Sci-Fi",
  },
  {
    title: "Inception",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
    year: "2010",
    rating: 8.8,
    genre: "Sci-Fi",
  },
  {
    title: "Inception",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
    year: "2010",
    rating: 8.8,
    genre: "Sci-Fi",
  },
  {
    title: "Inception",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
    year: "2010",
    rating: 8.8,
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    posterUrl: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    year: "2006",
    rating: 9.0,
    genre: "Action",
  },
];

export const Landingpage = () => {
  const handleCardClick = (title: string) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <Layout headerText="Your Gateway to Unlimited Cinema Magic!" headerBg={background}>
        <div className='homecontainer'>
            <div className='sdf'>
                <div className='recommendation'>
                    <p>
                        Sci-fi
                    </p>
                </div>
                <div className='recommendation'>
                    <p>
                        Animation
                    </p>
                </div>
                <div className='recommendation'>
                    <p>
                        Thriller
                    </p>
                </div>
                <div className='recommendation'>
                    <p>
                        Romance
                    </p>
                </div>
                <div className='recommendation'>
                    <p>
                        Comedy
                    </p>
                </div>
                <div className='recommendation'>
                    <p>
                        Action
                    </p>
                </div>
                <div className='recommendation'>
                    <p>
                        Crime
                    </p>
                </div>
            </div>
        <div className='movies'>
      {movies.map((movie, index) => (
        <Moviecard
          key={index}
          title={movie.title}
          posterUrl={movie.posterUrl}
          year={movie.year}
          rating={movie.rating}
          genre={movie.genre}
          onClick={() => handleCardClick(movie.title)}
        />
      ))}
      </div>
    </div>
    </Layout>
  );
};
