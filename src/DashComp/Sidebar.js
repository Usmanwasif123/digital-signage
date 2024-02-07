import React from 'react';
import '../assets/DashWrapper/Sidebar.css'
import { Link } from 'react-router-dom';


const Sidebar = ({onShowScreens}) => {

  const handleScreenClick = () => {
    // Call the onShowScreens function when the screen image is clicked
    onShowScreens();
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
        <Link to="/profile"><img className='sidebar-profile' src='https://i.ibb.co/pL8rsqy/Asset-4.png'/></Link></li>
        <li className='signout' >
        <Link to="/signin" style={{color: '#fff',  }}>Sign out</Link></li>
        <li>
        <Link to="/content"><img className='sidebar-content' src='https://i.ibb.co/st71q5V/Asset-6.png'/></Link></li>
        <li>
          <li>
          <button className='show-screen' onClick={onShowScreens} style={{ top: '10px', marginLeft:'-810px', zIndex: '5', background: 'transparent', position: 'absolute'}}><img className='sidebar-screen'  
      src='https://i.ibb.co/5KJ2HPJ/Asset-5.png'/></button>
          </li>
        <Link to="/loop"><img className='sidebar-video' src='https://i.ibb.co/GFkdDgP/Asset-7.png'/></Link></li>
        <li>
        <Link to="/schedule"><img className='sidebar-schedule' src='https://i.ibb.co/8jFLw3g/Asset-8.png'/></Link></li>

        <img className='sidebar-chat' src='https://i.ibb.co/MVtW40s/image.png'/>

      </ul>
    </div>
  )
}

export default Sidebar
