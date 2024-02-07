import React, { useState ,useEffect} from 'react';
import '../assets/DashWrapper/PromptModal.css'



const Scheduleprompt = ({ onConfirm, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  


 

  const handleInputChange = (e) => {

    setInputValue(e.target.value);
  };
  
  const handleConfirm = () => {
    alert("Please Select the content");
    window.location.href = "/content";
    onConfirm(inputValue);
  };

  const handleCancel = () => {
   
    onCancel();
  };


  
  



  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div style={{borderBottom: '1px solid black', padding: '10px'}}><h3 style={{textAlign:'left'}}>Add Schedule</h3></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
  <div  className=' input-container-adjustment'>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Add Schedule"
      className='input-field'
      style={{borderBottom: '1px solid black', width:'100%'}}
    />
    
  </div>
  


  
  
  <div className='button-container-adjustment' >
    
    <button onClick={handleCancel} style={{height:'40px'}}>Cancel</button>
    <button onClick={handleConfirm}>Confirm</button>
  </div>
</div>

    </div>
    </div>
  );
};

export default Scheduleprompt;