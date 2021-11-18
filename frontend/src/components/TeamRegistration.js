import React from 'react';
import { Button } from '@material-ui/core'
import { useHistory } from "react-router-dom";


const payHandler = (e) => {
    const data = {
        "team_id": 1,
        "payment_amount" : 1100
    };
    var myHeaders = { 
        "Content-Type": "application/json"
    }
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)
    };
    fetch("http://localhost:5000/api/v1/testPost/", requestOptions)
    .then((res) => res.json())
    .then((data) => {
        // var reponse = res.json()

        console.log(data.message)
        // history.push("/payment-gateway", {team_id: res.team_id})
    })
    .catch((e) => {
    })
  }

function TeamRegistration() {
    var teamReg = {
        width: '100%',
        height: '100%',
        backgroundColor: '#EDF5FC',
        color: '#999999',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'RobotoSlab',
        fontWeight: 700,
    }
    return (
        <div style={teamReg}>
            Team Registration
            <Button variant="contained"
                   onClick={payHandler} 
                   color="primary">
                       PAY
            </Button>
        </div>
    )
}



export default TeamRegistration
