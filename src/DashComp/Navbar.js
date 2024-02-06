import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaChartBar, FaUser, FaBell, FaCog } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import '../assets/DashWrapper/Navbar.css';

const DashboardNavbar = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('En');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false); // Hide the language dropdown after selection
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  return (
    <Navbar bg="blue" variant="dark" className='navbar-container'>
      <Navbar.Brand as={Link} to="/">
        <img
          src='https://i.ibb.co/0JwL4VK/yaxi-removebg-preview-1.png'
          width="60"
          height="60"
          className="yaxi-logo"
          alt="Yaxi Logo"
        />
      </Navbar.Brand>
      <Nav className="navbar-right">
      <h1 className='Company'>My Company </h1>
      
        <Nav.Link as={Link} to="/statistics">
          <img src='https://i.ibb.co/vzDxdQS/Asset-10.png' className="stats-icon" />
        </Nav.Link>
        <Nav.Link as={Link} to="/user" >
          <img src='https://i.ibb.co/sQYLnK9/Asset-9.png' className="user-icon"/>
        </Nav.Link>
        <Nav.Link onClick={() => setShowNotification(!showNotification)}>
          <img src='https://i.ibb.co/gWxBn4w/Asset-11.png' className="notification-icon" />
        </Nav.Link>
        <Nav.Link onClick={() => setShowSettings(!showSettings)}>
          <img src='https://i.ibb.co/hYfLGDm/image.png' className="setting-icon" />
        </Nav.Link>
        <div className="language-dropdown-container">
          <div className="dropdown-toggle" onClick={toggleLanguageDropdown}>
            <GrLanguage style={{position: 'absolute', left: '-20px', top: '5px', color: '#fff'}} />
            <span>{selectedLanguage}</span>
          </div>
          {showLanguageDropdown && (
            <div className="language-dropdown">
              <div onClick={() => handleLanguageChange('En')}>English</div>
              <div onClick={() => handleLanguageChange('Es')}>Español</div>
              <div onClick={() => handleLanguageChange('Pt')}>Português</div>
              <div onClick={() => handleLanguageChange('Fr')}>Français</div>
              <div onClick={() => handleLanguageChange('De')}>Deutsch</div>
              <div onClick={() => handleLanguageChange('Br')}>Português (Brasil)</div>
              <div onClick={() => handleLanguageChange('It')}>Italiano</div>
              <div onClick={() => handleLanguageChange('Ru')}>Русский</div>
              <div onClick={() => handleLanguageChange('Zh')}>中国</div>
            </div>
          )}
        </div>
      </Nav>

      {/* Notification dropdown */}
      {showNotification && (
        <div className="navbar-dropdown-notifcation-div">
          {/* Notification Content */}
          <h1>Need a device?</h1>
          <p>If you don’t have your own device yet, you can always order our versatile plug’n’play media players suitable for 
            any digital signage screens with HDMI input</p>
            <button className='look-btn'>Buy Look player</button>
        </div>
      )}

      {/* Settings dropdown */}
      {showSettings && (
        <div className="navbar-dropdown">
          {/* Settings Content */}
          Settings Content
        </div>
      )}
    </Navbar>
  );
};

export default DashboardNavbar;
