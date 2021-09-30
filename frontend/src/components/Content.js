import React from 'react';
import CoachTeam from './CoachTeam';
// import TeamRegistration from './TeamRegistration';

function Content() {
    var content = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
    return (
        <div style={content}>
            {/* <TeamRegistration></TeamRegistration> */}
            <CoachTeam></CoachTeam>
        </div>
    )
}

export default Content;
