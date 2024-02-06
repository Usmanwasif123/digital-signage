
import React, { useState, useEffect } from 'react';
import Navbar from '../DashComp/Navbar';
import Sidebar from '../DashComp/Sidebar';
import Searchbar from '../DashComp/Searchbar';
import PromptScreen from '../DashComp/PromptScreen';
import MapContainer from '../DashComp/Mapcontainer';
import ShowScreens from '../DashComp/Showscreens';
import Paymentpromptscreen from '../DashComp/Paymentpromptscreen';
import '../assets/DashWrapper/Dashboard.css'



const Dashboard = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [showPaymentPrompt, setShowPaymentPrompt] = useState(false);

  const handleShowPrompt = () => {
    setShowPrompt(true);
  };

  const handlePromptConfirm = (inputValue) => {
    console.log('Confirmed:', inputValue);
    setShowPaymentPrompt(true);
    setShowPrompt(false);
  };

  const handlePromptCancel = () => {
    console.log('Prompt canceled');
    setShowPrompt(false);
  };

  const togglescreens = () => {
    
    setShowMap((prevShowMap) => !prevShowMap);
  };
 
  const showMaps = () => {
    window.location.reload();
  }
  
  const handleShowPaymentPrompt = () => {
    setShowPaymentPrompt(true);
  };

  const handlePaymentPromptConfirm = (paymentInfo) => {
    console.log('Payment confirmed:', paymentInfo);
    setShowPaymentPrompt(false);
  };

  const handlePaymentPromptCancel = () => {
    console.log('Payment prompt canceled');
    setShowPaymentPrompt(false);
  };
  

   return (
    <div className="dashboard-container">
   
   <div className="content-container">
   <Navbar />
    {showMap && <MapContainer />}
      
      <Searchbar onShowPrompt={handleShowPrompt} onShowScreens={togglescreens} onShowMap={showMaps} />

      {!showMap && <ShowScreens />}
      

    {showPrompt && (
        <PromptScreen
          onConfirm={handlePromptConfirm}
          onCancel={handlePromptCancel}
        />
    )}
    {showPaymentPrompt && (
        <Paymentpromptscreen
          onConfirm={handlePaymentPromptConfirm}
          onCancel={handlePaymentPromptCancel}
        />
      )}
       </div>
    <Sidebar />
    </div>
  );
};

export default Dashboard;
