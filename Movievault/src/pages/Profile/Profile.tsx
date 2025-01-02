import './profile.css';
import { Navbar } from '../../components/Navbar/navbar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



interface Movie {
  id: number;
  title: string;
  posterUrl: string;
}

export const Profile = () => {
  const navigate = useNavigate();
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleForYou = () => {
    navigate('/madeforyou'); 
  };

  const handleAddToWatchlist = (movie: Movie) => {
    if (!watchlist.find((item) => item.id === movie.id)) {
      setWatchlist((prev) => [...prev, movie]);
    }
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
            Watchlist
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
            <h3>Your Watchlist</h3>
            <button onClick={togglePopup} className="close-popup">Close</button>
            {watchlist.length ? (
              <ul>
                {watchlist.map((movie) => (
                  <li key={movie.id}>
                    <img src={movie.posterUrl} alt={movie.title} />
                    <p>{movie.title}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your watchlist is empty.</p>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
