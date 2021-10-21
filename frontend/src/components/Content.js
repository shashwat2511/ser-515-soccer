import React from 'react';
// import PaymentInfo from './PaymentInfo/PaymentIndex';
// import PaymentDetails from './PaymentInfo/PaymentDetails';
// import CoachTeam from './CoachTeam';
// import Referee from './Referee';
// import TournamentManager from './TournamentManager';
// import TeamRegistration from './TeamRegistration';

function Content({children}) {
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
            {/* <TeamRegistration></TeamRegistration> */}
            {/* <CoachTeam></CoachTeam> */}
            {/* <Referee></Referee> */}
            {/* <TournamentManager></TournamentManager> */}
            {/* <RulesandRegulationsTM /> */}
            {/* <PaymentInfo/>  */}
            {/* <PaymentDetails/> */}
            {children}
        </div>
    )
}

export default Content;
