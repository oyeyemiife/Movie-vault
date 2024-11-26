import './profile.css';
import { Navbar } from '../../components/Navbar/navbar';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {

  const navigate = useNavigate();

  const handleForYou = () => {
    navigate('/madeforyou'); 
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
        <div className="profile-section">
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
    </div>
  );
};
