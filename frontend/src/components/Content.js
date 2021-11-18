import React from 'react';

import CoachTeam from './CoachTeam';
import Referee from './Referee';
import TournamentManager from './TournamentManager';
import TeamRegistration from './TeamRegistration';
import CoachRegistrationForm from './CoachRegistrationForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaymentInfo from './PaymentInfo';
import PaymentGateway from './PaymentGateway';
import FilterTitle from './FilterTitle';
import Home from './Home';
import SSSFilter from './SSSFilter';

// import PaymentInfo from './PaymentInfo/PaymentIndex';
// import PaymentDetails from './PaymentInfo/PaymentDetails';

function Content() {
    var content = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(100% - 2em)',
        height: 'calc(100% - 10em)',
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
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/schedule" component={FilterTitle} />
                    <Route path="/referee" component={Referee} />
                    <Route path="/team-registration" component={TeamRegistration} />
                    <Route path="/coach-team" component={CoachTeam} />
                    <Route path="/tournament-manager" component={TournamentManager} />
                    <Route path="/coach-registration" exact component={CoachRegistrationForm} />
                    <Route path="/payment-gateway" component={PaymentGateway} />
                    <Route path="/payment-info" component={PaymentInfo} />
                </Switch>
            </Router>
        </div>
    )
}

export default Content;
