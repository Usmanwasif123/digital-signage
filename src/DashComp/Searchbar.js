import React from 'react';
import '../assets/DashWrapper/Searchbar.css'

const Navbar = ({ onShowPrompt , onShowMap , onShowScreens}) => {
  return (
    <div className='search-container' >
      
      
      <div>
     
      <button onClick={onShowPrompt} style={{ marginLeft:'65%'}}>Add Screen</button>
      <button onClick={onShowMap} style={{marginLeft:'10px'}}>Show Map</button>
      <button onClick={onShowScreens}style={{marginLeft:'10px'}} >Show Screens</button>
      </div>
     
    </div>
   
  )
}

export default Navbar
