import React from 'react';
import { StreakIcon } from '../../assets/svg/svg-export';
import './profile.css';
import { Layout } from '../../components/Dashboard/layout';
import background from '../../assets/Navbar/back.webp'

export const Profile = () => {
  return (
    <Layout headerText="Your Gateway to Unlimited Cinema Magic!" headerBg={background}>
    <div className="profilecontainer">
      <div className="profile-image-section">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="profile-image"
        />
        <h2 className="username">Oyeyemi Ifeoluwa</h2>
        <h2 className="username">cv;kml </h2>
      </div>

      <div className="profile-details">
        <div className="profile-section">
          <p className="profile-title">
            Streaks <span className="icon"><StreakIcon /></span>
          </p>
        </div>

        <div className="profile-section">
          <p className="profile-title">
            Watchlist
          </p>
        </div>

        <div className="profile-section">
          <p className="profile-title">
            Recommendations
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};
