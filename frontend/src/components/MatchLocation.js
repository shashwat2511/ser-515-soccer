import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Box, typography } from "@mui/system";

export default function MatchLocation(){

  return (
      <Container>
          <iframe src="https://wfc.tourneycentral.com/fmt/WFC.html?k=yBoziP7ZmHYbcZFpoX00BUz0X1x3yI7N&c=1637439431" width="100%" height="600" marginWidth="0" marginHeight="0" bordercolor="#000000">

          </iframe>
    <typography variant = "h5">This map is informational only. No representation is made or warranty given as to its content. Many sports parks DO NOT have a street address. If there is no street address for a park or it is not known, it will not appear below. Teams are encouraged to double check with reliable third-party maps and/or DOT sites for construction, detours and delays.</typography>
    <Box p={1} style={{ backgroundColor: "#757ce8", color: "white"}} >
        <Typography variant = "h8" >Warrior Soccer Complex (WSC)</Typography>
    </Box>
    <typography variant = "h5">
        NO Pets allowed. Fields are visible from Fishburg Road. ENTER ONLY at the MAIN entrance and EXIT ONLY at the WEST exit off Fishburg Road.
    </typography>    
        <ul>
            <li>Speed limit is 5 MPH! Please watch for our children.</li>
            <li>Please print a copy of the field maps for ease of finding your field. Please do NOT park in handicap spaces unless you have a person that actually needs to use that space.</li>
            <li>The Main entrance drive is Two-Way on the east/north/south of the complex with the west drive ONLY ONE-Way going south to the west side of the site exit.</li>
            <li>Fields 1-4 (8v8) SOUTH parking is an immediate left turn after entering site. Exit to the southwest ONLY.</li>
            <li>Fields 5-10 (6v6) EAST parking (go straight into site at Main entrance) parking is on both sides of the main road.</li>
            <li>Fields 13-16 (8v8) parking at NORTH lot at top end of the complex with ample parking.</li>
            <li>Fields 11-12 (11v11) enter at the Main entrance and drive completely around the site to the WEST parking lot. The WEST lot is one lane that is DIAGONAL parking only. Leave the park heading SOUTH to the exit.</li>
            <li>The Warrior Complex has ample parking with a lot of overflow parking around the circle drive.</li>
            <li>Police Cadets are available to help maintain traffic control.</li>
            <li>Please NO PETS allowed at the WSC Complex.</li>
        </ul>
    <img src="http://warriorfallclassic.com/pdf/WFCMAP1633283174604.jpg"></img>
    </Container>
    
  );
};


