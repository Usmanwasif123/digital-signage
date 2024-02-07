import React, { useState ,useEffect} from 'react';
import '../assets/DashWrapper/PromptModal.css'
import moment from 'moment-timezone';

const Adminprompt = ({ onConfirm, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  
  const recentActivities = [
    'User 1 updated profile information',
    'User 2 added a new post',
    'User 3 logged in',
    'User 4 uploaded a file',
    // Add more activities as needed
  ];
  const [dateTime, setDateTime] = useState('');

 
  
  const handleConfirm = () => {
    onConfirm(inputValue);
  };

  const handleCancel = () => {
   
    onCancel();
  };


  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div style={{borderBottom: '1px solid black', padding: '10px'}}><h3 style={{textAlign:'left'}}>Users</h3></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
      <div style={{ padding: '10px', overflowY: 'auto', maxHeight: '300px' }}>
      <ul >
        {recentActivities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  <div className=' button-container-adjustment'>
    
    <button onClick={handleCancel}>Cancel</button>
    <button onClick={handleConfirm}>Confirm</button>
  </div>
</div>

    </div>
    </div>
  );
};

export default Adminprompt;