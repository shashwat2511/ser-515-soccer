import React from 'react';
import CoachTeam from './CoachTeam';
import Referee from './Referee';
import TournamentManager from './TournamentManager';
import TeamRegistration from './TeamRegistration';
import CoachRegistrationForm from './CoachRegistrationForm';
import { Paper } from '@material-ui/core';

function Content() {
    var content = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(100% - 2em)',
        height: 'calc(100% - 6em)',
        overflow: 'auto',
        padding: '5em 1em',
        display: 'flex',
        flexGrow: 1,
        background: '#EDEDED'
    }
    return (
        <div className='content' style={content}>
            {/* <TeamRegistration></TeamRegistration> */}
            {/* <CoachTeam></CoachTeam> */}
            {/* <Referee></Referee> */}
            {/* <TournamentManager></TournamentManager> */}
            <Paper style={{ width: '100%' }}>
                <CoachRegistrationForm></CoachRegistrationForm>
            </Paper>
        </div>
    )
}

export default Content;
