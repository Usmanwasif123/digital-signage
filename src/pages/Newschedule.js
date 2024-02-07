import React, { useState } from 'react';
import Sidebar from '../DashComp/Sidebar';
import '../assets/DashWrapper/Profile.css'; 
import MySvgImage from '../assets/images/image.svg';
import Navbar from '../DashComp/Navbar';
import Scheduleprompt from '../DashComp/Scheduleprompt';

const Newschedule = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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
         <div>
        <table  style={{margin:'100px'}}>
        <thead>
          <tr style={{margin:'100px'}}>
            {/ Dynamically generate column headers for each day /}
            {daysOfWeek.map(day => (
              <th key={day} style={{padding:'20px'}}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/ Here you can populate the schedule for each day /}
          {/ For demonstration purposes, I'm filling the cells with "Work" /}
          <tr>
            {daysOfWeek.map(day => (
              <td key={day}  style={{textAlign:'center',color: 'Black', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#1386ac'}
              onMouseLeave={(e) => e.target.style.background = 'white'}>+</td>
            ))}
          </tr>
          {/ Add more rows for different time slots or tasks /}
        </tbody>
      </table>
      </div>
          <img src={MySvgImage} alt="SVG Image" style={{ width: '200px', height: '200px', marginLeft: '44%', marginTop: '10%' }} />
          
        </div>
      </div>
      <br />
      <Sidebar />
      {showPrompt && <Scheduleprompt onConfirm={handlePromptConfirm} onCancel={handlePromptCancel} />}
     
    </div>
  );
};

export default Newschedule;