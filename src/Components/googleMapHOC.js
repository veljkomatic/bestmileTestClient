import React, { PureComponent } from 'react';
import {
    withGoogleMap,
    GoogleMap,
  } from "react-google-maps";
  
  const GoogleMapHOC = withGoogleMap(props => {
        console.log('GoogleMapHOC', props);
        return  (
            <GoogleMap
                defaultCenter = { { lat: 40.730610, lng: -73.935242 } }
                defaultZoom = { 12 }
            >
            </GoogleMap>
        )
  });
  
  export default GoogleMapHOC;