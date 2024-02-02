import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Mapcontainer extends React.Component {
  render() {
    
      
    return (
       
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
      />
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your actual API key
})(Mapcontainer);
