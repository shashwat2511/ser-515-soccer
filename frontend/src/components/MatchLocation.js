import React from "react";
import GoogleMapReact from 'google-map-react';
import { Container, Grid } from "@material-ui/core";
import { typography } from "@mui/system";

// const MapConst = ({ text }) => <div>{text}</div>;

export default function MatchLocation(){
  const defaultProps = {
    center: {
      lat: 10,
      lng: 77
    },
    zoom: 11
  };

  return (
      <Container maxWidth="sm">
    
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <MapConst
          lat={59}
          lng={30}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
    <typography variant ="h4">This map is informational only. No representation is made or warranty given as to its content. Many sports parks DO NOT have a street address. If there is no street address for a park or it is not known, it will not appear below. Teams are encouraged to double check with reliable third-party maps and/or DOT sites for construction, detours and delays.</typography>
    </Container>
    
  );
}


