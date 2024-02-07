import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { GrLanguage } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import '../assets/DashWrapper/Videos.css';
import '../assets/DashWrapper/Videosidebar.css';
import Videosidebar from '../DashComp/Videosidebar';
import Videosearchbar from '../DashComp/Videosearchbar';
import image from '../assets/images/image.svg';



const Videos = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('En');
    const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    const [playlistName, setPlaylistName] = useState('');


    const openPlaylistModal = () => {
        setShowPlaylistModal(true);
    };

    const closePlaylistModal = () => {
        setShowPlaylistModal(false);
    };

    const handlePlaylistCreate = () => {
        // Handle playlist creation logic here
        console.log("Playlist Name:", playlistName);
        // You can add your logic here to create the playlist
        closePlaylistModal();
    };
  
    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
      setShowLanguageDropdown(false); // Hide the language dropdown after selection
    };
  
    const toggleLanguageDropdown = () => {
      setShowLanguageDropdown(!showLanguageDropdown);
    };
  
    return (
        <>
      <Navbar bg="blue" variant="dark" className='video-container'>
        <Navbar.Brand as={Link}>
          <img
            src='https://i.ibb.co/fN3nTwY/image.png'
            width="60"
            height="60"
            className="video-yaxi-logo"
            alt="Yaxi Logo"
          />
        </Navbar.Brand>
        <Nav className="navbar-right">       
         
          <Nav.Link onClick={() => setShowNotification(!showNotification)}>
            <img src='https://i.ibb.co/gWxBn4w/Asset-11.png' className="video-notification-icon" />
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
            <div className='download-play-div'>
            <p className='download-play'>Download player:</p>
            <img className='google-play' src='https://i.ibb.co/BGMNfcw/Link.png'/>
            <img className='amazon-play' src='https://i.ibb.co/r2WNGM7/Group.png'/>
            <img className='window-play' src='https://i.ibb.co/xLQ50Sd/Link.png'/>
            <img className='apple-play' src='https://i.ibb.co/tmPwzyV/Link-1.png'/>
            <img className='penguie-play' src='https://i.ibb.co/tYH1STB/Link-2.png'/>
            </div>
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
      <Videosidebar/>      
     
      <div className='video-description'>
                <img src={image} className='video-image' />
                <h1>Create your playlist</h1>
                <p>Create the playlists in order to set the duration and <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;sequence of one or another item of a content.</p>
                <button className='first-playlist-btn' onClick={openPlaylistModal}>Create First Playlist</button>
            </div>

            {/* Playlist Creation Modal */}
            {showPlaylistModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closePlaylistModal}>&times;</span>
                        <h2 className='modal-heading'>Creating Playlist</h2>
                        <input className='modal-text'
                            type="text"
                            placeholder="Enter playlist name"
                            value={playlistName}
                            onChange={(e) => setPlaylistName(e.target.value)}
                        />
                        <br />
                        <br />
                        <button onClick={closePlaylistModal}>Cancel</button>
                        <button onClick={handlePlaylistCreate}>Create</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Videos
