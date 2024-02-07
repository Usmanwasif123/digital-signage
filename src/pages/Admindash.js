import React, { useRef , useEffect } from 'react';
import Navbar from '../DashComp/Navbar';
import Sidebaradmin from '../DashComp/Sidebaradmin';

import '../assets/DashWrapper/Dashboard.css'



const Admindash = () => {
  const totalUsers = 100;
  const recentActivityRef = useRef(null);
  const updates = [
    { id: 1, message: 'User 1 updated profile' },
    { id: 2, message: 'User 2 added a new post' },
    { id: 3, message: 'User 3 changed password' },
  ];
  const recentActivities = [
    'User 1 updated profile information',
    'User 2 added a new post',
    'User 3 logged in',
    'User 4 uploaded a file',
    // Add more activities as needed
  ];

  useEffect(() => {
    // Function to scroll the recent activities div up
    const scrollUp = () => {
      if (recentActivityRef.current) {
        recentActivityRef.current.scrollTop += 1; // Increment to scroll up; adjust speed as needed
      }
    };

      // Set interval to trigger scrollUp function every 100ms (adjust as needed)
      const intervalId = setInterval(scrollUp, 100);

      // Clear interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  



   return (
   <div> <Navbar />
    <div className="dashboard-container">
   
      <div className="profile-container" style={{marginLeft:'20px'}}>
      <div className="dashboard-container">
        <div className="dashboard-section users-graph">
          <h2>Total Users: {totalUsers}</h2>
          
        </div>
        
        <div className="dashboard-section" ref={recentActivityRef}>
          <h2 style={{paddingBottom:'20px'}}>Recent Activity:</h2>
          <div className=' recent-activity recent-activities-container'>
          <ul className="recent-activities-list">
          {recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
          </ul>
          </div>
        </div>
      </div>
        </div>
      <Sidebaradmin />
      </div>
      </div>
  );
};

export default Admindash;