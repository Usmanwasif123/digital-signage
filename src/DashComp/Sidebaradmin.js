import React from 'react';
import '../assets/DashWrapper/Sidebaradmin.css'
import { Link } from 'react-router-dom';


const Sidebaradmin = () => {
    
 
  return (
    <div className="sidebaradmin">
      <ul>
        <li>
        <Link to="/admin"><img className='sidebar-profile' src='https://i.ibb.co/pL8rsqy/Asset-4.png'/></Link></li>
        <li className='signout' style={{paddingTop:'50px'}}>
        <Link to="/signin" style={{color: '#fff',  }}>Sign out</Link></li>
        <li>
        <Link to="/admin/content"><img className='sidebar-content' src='https://i.ibb.co/st71q5V/Asset-6.png'/></Link></li>
      
        
      </ul>
      
    </div>
  )
}

export default Sidebaradmin