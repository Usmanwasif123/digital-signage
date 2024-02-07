import React from 'react';
import '../assets/DashWrapper/Videosearchbar.css'

const Videoseacrhbar = ({ onShowPrompt , onShowMap , onShowScreens}) => {
  return (
    <div className='videosearch-container' >
      <img className='video' src='https://i.ibb.co/cTvz2HY/image.png' />
      
      
      <div>
      <button className='add-screen'onClick={onShowPrompt} style={{ marginLeft:'40%', color: '#333', border: '2px solid grey', borderColor: 'grey', background: 'transparent',fontSize: '15px', textTransform: 'uppercase', padding: '9px'}}>Add Screen</button>
      <button  className='show-map' onClick={onShowMap} style={{marginLeft:'10px', color: '#333', border: '2px solid grey', borderColor: 'grey',  background: 'transparent',fontSize: '15px', textTransform: 'uppercase', padding: '9px'}}>Show Map</button>
      <button className='show-screen' onClick={onShowScreens} style={{ top: '10px', marginLeft:'-810px', zIndex: '5', background: 'transparent', position: 'absolute'}}><img className='sidebar-screen'  
      src='https://i.ibb.co/5KJ2HPJ/Asset-5.png'/></button>
      </div>
     
    </div>
   
  )
}

export default Videoseacrhbar
