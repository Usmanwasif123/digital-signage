import React, { useRef , useEffect, useState } from 'react';
import Navbar from '../DashComp/Navbar';
import Sidebaradmin from '../DashComp/Sidebaradmin';
import MySvgImage from '../assets/images/profile.jpg';
import MySvgImage2 from '../assets/images/signage.png';
import MySvgImage3 from '../assets/images/work.png';
import Adminprompt from '../DashComp/Adminprompt';
import Totaluserprompt from '../DashComp/Totaluserprompt';
import '../assets/DashWrapper/Dashboard.css'
import axios from 'axios'; // Import axios for making HTTP requests



const Admindash = () => {

  
  const [userDetails, setUserDetails] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const recentActivityRef = useRef(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showPrompt1, setShowPrompt1] = useState(false);
  const handleHover = (e) => {
    e.target.style.color = 'blue'; // Change color to red on hover
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = ''; // Reset color when mouse leaves
  };

 
  useEffect(() => {
    // Fetch user details
    axios.get('/userId') // Assuming this endpoint returns user details
      .then(response => {
        setUserDetails(response.data);
        console.log(response); // Update total users state
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });

    // Fetch user activities
    axios.get('/activities') // Assuming this endpoint returns user activities
      .then(response => {
        setRecentActivities(response.data.recentActivities); // Update recent activities state
      })
      .catch(error => {
        console.error('Error fetching user activities:', error);
      });

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

    const handleShowPrompt = () => {
        setShowPrompt(true); // Show the prompt
      };
      
      const handlePromptConfirm = (inputValue) => {
        console.log('Confirmed:', inputValue);
        setShowPrompt(false); // Hide the prompt when confirmed
      };
      
      const handlePromptCancel = () => {
        console.log('Prompt canceled');
        setShowPrompt(false); // Hide the prompt when canceled
      };
      const handleShowPrompt1 = () => {
        setShowPrompt1(true); // Show the prompt
      };
      
      const handlePromptConfirm1 = (inputValue) => {
        console.log('Confirmed:', inputValue);
        setShowPrompt1(false); // Hide the prompt when confirmed
      };
      
      const handlePromptCancel1 = () => {
        console.log('Prompt canceled');
        setShowPrompt1(false); // Hide the prompt when canceled
      };
   return (
   <div> <Navbar />
    <div className="dashboard-container">
   
      <div className="profile-container" style={{marginLeft:'20px'}}>
      <h1 style={{paddingBottom:'20px'}}>Dashboard</h1>
      <div className="dashboard-container" style={{marignLeft: '-200px'}}>
        
        <div className="dashboard-section users-graph" style={{background:'lightblue'}}>
        <img src={MySvgImage2} alt="SVG Image" style={{ width: '100px', height: '100px'  }} />
          <h3 onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Total Signage </h3>
        </div>
        <div className="dashboard-section users-graph" style={{background:'lightblue'}}>
        <img src={MySvgImage3} alt="SVG Image" style={{ width: '100px', height: '100px'  }} />
          <h3 onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Work in progress</h3>
          
        </div>
        <div className="dashboard-section users-graph" style={{background:'lightblue'}}>
        <img src={MySvgImage} alt="SVG Image" style={{ width: '100px', height: '100px'  }} />
          <h3 onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} onClick={handleShowPrompt1}>Total Users:
        {userDetails.map(user => (
          <div key={user._id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add more fields as needed */}
          </div>
        ))}</h3>
        </div>
        
       <div className="dashboard-section" ref={recentActivityRef} style={{background:'lightblue'}}>
          <h2 style={{paddingBottom:'20px', fontFamily:'sans-serif', fontStyle:'italic'}} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}  onClick={handleShowPrompt}>User Request:</h2>
          <div className=' recent-activity recent-activities-container'>
          <ul className="recent-activities-list">
          {recentActivities ?.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
          </ul>
          </div>
        </div>
      </div>
        </div>
      <Sidebaradmin />
      {showPrompt && (
        <Adminprompt
          onConfirm={handlePromptConfirm}
          onCancel={handlePromptCancel}
        />
    )}
     {showPrompt && (
        <Totaluserprompt
          onConfirm={handlePromptConfirm1}
          onCancel={handlePromptCancel1}
        />
    )}
      </div>
      </div>
  );
};

export default Admindash;