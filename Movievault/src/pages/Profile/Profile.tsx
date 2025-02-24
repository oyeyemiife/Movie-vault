import './profile.css';
import { Navbar } from '../../components/Navbar/navbar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useWatchlist } from '../../components/watchlistContext';
import React from 'react';


export const Profile = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const { watchlist } = useWatchlist(); 

  const handleForYou = () => {
    navigate('/madeforyou'); 
  };

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <div className="profilecontainer">
      <Navbar/>
      <div className="profile-image-section">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="profile-image"
        />
        <p className="username">Ifeoluwa</p>
      </div>

      <div className="profile-details">
        <div className="profile-section" onClick={togglePopup}>
          <p className="profile-title">
            My Watchlist
          </p>
        </div>

        <div className="profile-section" onClick={handleForYou}>
          <p className="profile-title">
            Made for You
          </p>
        </div>
      </div>

      {showPopup && (
        <div className="watchlist-popup">
          <div className="popup-content">
            <div className="popup-header">
              <h3>Your Watchlist</h3>
              <button onClick={togglePopup} className="close-button">&times;</button>
            </div>
            {watchlist.length ? (
              <div className="watchlist-grid">
                {watchlist.map((movie) => (
                  <div key={movie.id} className="watchlist-item">
                    <img 
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                      alt={movie.title} 
                    />
                    <div className="movie-info">
                      <h4>{movie.title}</h4>
                      <p>{movie.release_date.split('-')[0]}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-message">Your watchlist is empty.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
