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
import MatchLocation from './MatchLocation'
import AdminLogin from './AdminLogin';
import MatchSchedule from './MatchSchedule';
import FAQHeader from './FAQHeader';

import RulesandRegulationsTM from './RulesandRegulationsTM';
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
                    {/* <Route path="/team-registrationsss" component={TeamRegistration} /> */}
                    <Route path="/coach-team" component={CoachTeam} />
                    <Route path="/tournament-manager" component={TournamentManager} />
                    <Route path="/teamregistration" exact component={CoachRegistrationForm} />
                    <Route path="/payment-gateway" component={PaymentGateway} />
                    <Route path="/payment-info" component={PaymentInfo} />
                    <Route path="/maps" component={MatchLocation} />
                    <Route path="/admin_login" component={AdminLogin} />
                    <Route path="/match_schedule" component={MatchSchedule} />
                    <Route path="/rulesandregulations" component={RulesandRegulationsTM} />
                    {/* <Route path="/faqs" component={FAQHeader} /> */}
                </Switch>
            </Router>
        </div>
    )
}

export default Content;
