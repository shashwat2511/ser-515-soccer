import React from 'react';
import CoachTeam from './CoachTeam';
import Referee from './Referee';
import TournamentManager from './TournamentManager';
import TeamRegistration from './TeamRegistration';
import CoachRegistrationForm from './CoachRegistrationForm';
import { Paper } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Router>
                <Switch>
                    <Route path="/" exact component={CoachRegistrationForm} />
                    <Route path="/referee" component={Referee} />
                    <Route path="/team-registration" component={TeamRegistration} />
                    <Route path="/coach-team" component={CoachTeam} />
                    <Route path="/tournament-manager" component={TournamentManager} />
                    {/* <Route path="/coach-registration" component={CoachRegistrationForm} /> */}
                </Switch>
                {/* <TeamRegistration></TeamRegistration> */}
                {/* <CoachTeam></CoachTeam> */}
                {/* <Referee></Referee> */}
                {/* <TournamentManager></TournamentManager> */}
                {/* <CoachRegistrationForm></CoachRegistrationForm> */}
            </Router>
        </div>
    )
}

export default Content;
