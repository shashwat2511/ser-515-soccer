import React from 'react'

function CoachTeam() {
    var coachTeam = {
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
        <div style={coachTeam}>
            LETS ENROLL SOME TEAMS NOW <i className="twa twa-face-with-monocle" />!
        </div>
    )
}

export default CoachTeam
