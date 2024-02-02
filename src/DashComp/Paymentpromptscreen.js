import React, { useState ,useEffect} from 'react';
import '../assets/DashWrapper/PromptModal.css'


const Paymentpromtscreen = ({ onConfirm, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
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


  useEffect(() => {
    
  }, []);



  const handleConfirm = () => {
   
    onConfirm(inputValue);
  };

  const handleCancel = () => {
   
    onCancel();
  };


  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div style={{borderBottom: '1px solid black', padding: '10px'}}><h3 style={{textAlign:'left'}}>Payment</h3></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
 
        <div className=' button-container-adjustment'>
    
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
  </div>
</div>

    </div>
    </div>
  );
};

export default Paymentpromtscreen;
