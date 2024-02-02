import React, { useState ,useEffect} from 'react';
import '../assets/DashWrapper/PromptModal.css'
import moment from 'moment-timezone';

const PromptScreen = ({ onConfirm, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const [timeZones, setTimeZones] = useState([]);
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];
  const [dateTime, setDateTime] = useState('');

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };


  useEffect(() => {
    const allTimeZones = moment.tz.names();
    setTimeZones(allTimeZones);
  }, []);


  const handleInputChange = (e) => {

    setInputValue(e.target.value);
  };
  const handleInputChange2 = (e) => {

    setInputValue2(e.target.value);
  };

  const handleConfirm = () => {
    onConfirm(inputValue);
  };

  const handleCancel = () => {
   
    onCancel();
  };


  const handleTimeZoneChange = (e) => {
    setSelectedTimeZone(e.target.value);
  };
  

  const handleSubmit = () => {
    
    console.log('Input Value:', inputValue);
    console.log('Selected Time Zone:', selectedTimeZone);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div style={{borderBottom: '1px solid black', padding: '10px'}}><h3 style={{textAlign:'left'}}>Add screen</h3></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
  <div  className=' input-container-adjustment'>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Enter Screen code"
      className='input-field'
      style={{borderBottom: '1px solid black'}}
    />
    <input
      type="text"
      value={inputValue2}
      onChange={handleInputChange2}
      placeholder="Enter Screen Name"
      className='input-field'
      style={{borderBottom: '1px solid black'}}
    />
  </div>
  <div className='timezone-container'>
  <label htmlFor="datetime">Date and Time:</label>
      <input
        type="datetime-local"
        id="datetime"
        name="datetime"
        value={dateTime}
        onChange={handleDateTimeChange}
      />
      <p>Date and Time: {dateTime}</p>
  </div>
  <div  className='timezone-container'>
  <select  style={{
          border: 'none',
          outline: 'none',
          borderBottom: '1px solid black',
          minHeight: '30px',
          marginTop: '10px',
          width:'100%'
        }}>

        <option value="" disabled>Select a state</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

  </div>
  
  <div  className='timezone-container'>
  <select
        value={selectedTimeZone}
        onChange={handleTimeZoneChange}
        style={{
          border: 'none',
          outline: 'none',
          borderBottom: '1px solid black',
          minHeight: '30px',
          marginTop: '10px',
          width:'100%'
        }}
      >
        <option value="" disabled>
          Select Time Zone
        </option>
        {timeZones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
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

export default PromptScreen;
