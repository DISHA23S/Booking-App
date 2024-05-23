// src/pages/profile/Profile.js

import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './profile.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="profile">
      <h1>User Profile</h1>
      {user ? (
        <div className="profile-details">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Please log in to see your profile details.</p>
      )}
        </div>
      </div>
    </div>
    
  );
};

export default Profile;
