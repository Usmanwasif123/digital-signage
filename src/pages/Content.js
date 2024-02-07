import React from 'react';
import Sidebar from '../DashComp/Sidebar';
import '../assets/DashWrapper/Profile.css'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const Content = () => {

  return (
    <div className="dashboard-container">
        
      <div className="profile-container">
      <h1 style={{marginBottom:'2%'}}>Content</h1>
      <Card  sx={{ maxWidth: 345, backgroundColor: '#1386ac', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.ibb.co/8gppr4z/image.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Food Content
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Easy Tips To Keep Your Tiffin Food
        </Typography>
      </CardContent>
     
    </Card>
    </div>

      <Sidebar />
      </div>
  );
};

export default Content;
