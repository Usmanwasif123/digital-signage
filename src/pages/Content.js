import React, {useState} from 'react';
import Sidebar from '../DashComp/Sidebar';
import '../assets/DashWrapper/Profile.css'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Navbar from '../DashComp/Navbar';

// Import all images from the images folder dynamically
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const Content = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleAddImageClick = () => {
    document.getElementById('upload-input').click();
  };

  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

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
    <Card  sx={{ maxWidth: 345, backgroundColor: '#1386ac', marginTop: '-239px', marginLeft: '350px', transition: 'transform 0.3s',
     '&:hover': { transform: 'scale(1.1)' } }}>
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
    <div style={{ height: "100%", fontSize: '48px', marginLeft: '800px', marginTop: '150px', position: 'absolute', cursor: 'pointer' }} onClick={handleAddImageClick}>
          +
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          id="upload-input"
        />
        {selectedImage && (
          <Card sx={{ maxWidth: 345, backgroundColor: '#1386ac', marginTop: '1px', marginLeft: '1px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
            <CardMedia
              sx={{ height: 140 }}
              image={URL.createObjectURL(selectedImage)} // Dynamic image URL
              title="Uploaded Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Uploaded Image
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of the uploaded image
              </Typography>
            </CardContent>
          </Card>
        )}
  
    </div>
    <Navbar style={{width: '500px'}}/>
      <Sidebar />
      </div>
  );
};

export default Content;
