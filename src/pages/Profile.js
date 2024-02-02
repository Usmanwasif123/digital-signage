import React from 'react';
import Sidebar from '../DashComp/Sidebar';
import '../assets/DashWrapper/Profile.css'; 

const Profile = () => {
  const userProfile = {
    name: 'John Doe',
    age: 30,
    location: 'Cityville',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };
  return (
    <div className="dashboard-container">
      <div className="profile-container">
        <h2>User Profile</h2>
        <div>
          <strong>Name:</strong> {userProfile.name}
        </div>
        <div>
          <strong>Age:</strong> {userProfile.age}
        </div>
        <div>
          <strong>Location:</strong> {userProfile.location}
        </div>
        <div>
          <strong>Bio:</strong> {userProfile.bio}
        </div>
    </div>
      <Sidebar />
      </div>
  );
};

export default Profile;
