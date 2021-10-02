import React from 'react';

function Referee() {
    var ref = {
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
        <div style={ref}>
            Referee
        </div>
    )
}

export default Referee