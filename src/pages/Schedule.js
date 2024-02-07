import React, { useState } from 'react';
import Sidebar from '../DashComp/Sidebar';
import '../assets/DashWrapper/Profile.css'; 
import MySvgImage from '../assets/images/image.svg';
import Navbar from '../DashComp/Navbar';
import Scheduleprompt from '../DashComp/Scheduleprompt';

const Schedule = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  const handleShowPrompt = () => {
    setShowPrompt(true);
  };

  const handlePromptConfirm = (inputValue) => {
    console.log('Confirmed:', inputValue);
    setShowPrompt(false);
  };

  const handlePromptCancel = () => {
    console.log('Prompt canceled');
    setShowPrompt(false);
  };

  return (
    <div className="dashboard-container">
      <div className='content-container'>
        <Navbar />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={MySvgImage} alt="SVG Image" style={{ width: '200px', height: '200px', marginLeft: '44%', marginTop: '10%' }} />
          <div style={{ textAlign: 'center' }}>
            <h3>Schedules</h3>
            <p>Create weekly schedules, set up times and days of the week, use more than one playlist</p>
            <br />
            <button style={{ height: '40px', width: '200px' }} onClick={handleShowPrompt}>Add Schedule</button>
          </div>
        </div>
      </div>
      <br />
      <Sidebar />
      {showPrompt && <Scheduleprompt onConfirm={handlePromptConfirm} onCancel={handlePromptCancel} />}
    </div>
  );
};

export default Schedule;