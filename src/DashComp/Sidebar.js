import React from 'react';
import '../assets/DashWrapper/Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Yaxi</h1>
      <ul>
        <li> <Link to="/device">Home</Link></li>
        <li>
        <Link to="/profile">Profile</Link></li>
        <li>
        <Link to="/signin">Logout</Link></li>
      
      </ul>
    </div>
  )
}

export default Sidebar
