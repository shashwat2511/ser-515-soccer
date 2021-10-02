import React from 'react'

function TournamentManager() {
    var tm = {
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
        <div style={tm}>
            Tournament Manager initial page
        </div>
    )
}

export default TournamentManager
