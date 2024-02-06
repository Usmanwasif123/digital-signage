import React, { useState, useEffect } from 'react';
import '../assets/DashWrapper/Showscreens.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PromptScreen from './PromptScreen';

const ShowScreens = () => {
  const [screensData, setScreensData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 
 
  const fetchData = async () => {
  
 
  };
  

  useEffect(() => {
   
    fetchData();
  }, []);

  return (
    <div className='screen-containers' >
      <h2 style={{marginBottom:'10px',}}>Show Screens</h2>


      <div style={{ display: 'flex', gap: '10px' }}>
      
      <Card sx={{ maxWidth: 345, width: 302 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{background: '#1386ac', color: '#fff',
            fontSize: '18px', borderRadius: '5px', display: 'inline-block', padding: '1px',fontWeight: '500'}}>
              Demo Screen
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color: '#808080'}}>
              5.02.2024, 8:022
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card
        sx={{ maxWidth: 345, width: 302 }}
        onClick={handleMenuToggle}
        style={{ cursor: 'pointer' }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              style={{ textAlign: 'center', fontSize: '2em', color: '#1386ac' }}
            >
              +
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: 'center' }}
            >
              Add Screen
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {isMenuOpen && <PromptScreen onCancel={() => setIsMenuOpen(false)} />}
    </div>
    </div>
  );
};

export default ShowScreens;
