import { Grid, Paper, Button } from '@material-ui/core'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './../css/SSSFilter.css';
import Controls from './controls/Controls';
import { Form, useForm } from './useForm';

// const division = [
//     { id: '11', value: 'blue' },
//     { id: '12', value: 'green' },
//     { id: '13', value: 'yellow' },
//     { id: '14', value: 'purple' },
// ]

// const day = [
//     { id: '11', value: 'blue' },
//     { id: '12', value: 'green' },
//     { id: '13', value: 'yellow' },
//     { id: '14', value: 'purple' },
// ]

// const venue = [
//     { id: '11', value: 'blue' },
//     { id: '12', value: 'green' },
//     { id: '13', value: 'yellow' },
//     { id: '14', value: 'purple' },
// ]

// const club = [
//     { id: '11', value: 'blue' },
//     { id: '12', value: 'green' },
//     { id: '13', value: 'yellow' },
//     { id: '14', value: 'purple' },
// ]

// const team = [
//     { id: '11', value: 'blue' },
//     { id: '12', value: 'green' },
//     { id: '13', value: 'yellow' },
//     { id: '14', value: 'purple' },
// ]

// const match = [
//     { id: '11', value: 'match1'},
//     { id: '12', value: 'match2'},
//     { id: '13', value: 'match3'},
//     { id: '14', value: 'match4'},
//     { id: '15', value: 'match5'},
//     { id: '16', value: 'match6'},
//     { id: '17', value: 'match7'},
//     { id: '18', value: 'match8'},
//     { id: '19', value: 'match9'},
//     { id: '20', value: 'match10'},
//     { id: '21', value: 'match11'},
//     { id: '22', value: 'match12'},
//     { id: '23', value: 'match13'},
//     { id: '24', value: 'match14'},
//     { id: '25', value: 'match15'},
//     { id: '26', value: 'match16'},
//     { id: '27', value: 'match17'},
//     { id: '28', value: 'match18'},
//     { id: '29', value: 'match19'},
//     { id: '30', value: 'match20'},
//     { id: '31', value: 'match21'},
//     { id: '32', value: 'match22'},
//     { id: '33', value: 'match23'},
//     { id: '34', value: 'match24'},
//     { id: '35', value: 'match25'},
//     { id: '36', value: 'match26'},
//     { id: '37', value: 'match27'},
//     { id: '38', value: 'match28'},
//     { id: '39', value: 'match29'},
//     { id: '40', value: 'match30'},
// ]

function MatchSchedule(){
    const initialFValues = {
        division: '',
        day: '',
        venue: '',
        club: '',
        team: '',
        match: ''
    }

    const [divisions, setDivision] = useState([]);
    const [days, setDay] = useState([]);
    const [venues, setVenue] = useState([]);
    const [clubs, setClub] = useState([]);
    const [teams, setTeam] = useState([]);
    const [matches, setMatch] = useState([]);

    const [disable, setDisable] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFValues, false, true);

    return (
        <React.Fragment>
            <Paper style={{ width: "100%"}} elevation={3} className="paperTab">
                <Grid container justifyContent="center">
                    <Grid xs={11} item>
                        <Box py={1.5} className="sssFilterDeclarationHead">2021 Game Schedule</Box>
                        <Box className="sssFilterDeclarationContent">Select a team and match to be scheduled</Box>
                        <Box className="sssFilterDividor"></Box>
                        &nbsp;
                    </Grid>
                </Grid>
                    <Form autoComplete="on" onSubmit={handleSubmit}>
                        <Grid container item justifyContent="center">
                            <Grid xs={11} item>
                                <Grid container item xs={4}>
                                    <Controls.Select
                                        variant="outlined"
                                        name="division"
                                        label="Search by Division"
                                        value={values.division}
                                        onChange={handleInputChange}
                                        options={divisions}
                                    />
                                </Grid>
                                &nbsp;
                                <Grid container item xs={4}>
                                    <Controls.Select
                                        variant="outlined"
                                        name="day"
                                        label="Search by Day"
                                        value={values.day}
                                        onChange={handleInputChange}
                                        options={days}
                                    />
                                </Grid>
                                &nbsp;
                                <Grid container item xs={4}>
                                    <Controls.Select
                                        variant="outlined"
                                        name="venue"
                                        label="Search by Venue"
                                        value={values.venue}
                                        onChange={handleInputChange}
                                        options={venues}
                                    />
                                </Grid>
                                &nbsp;
                                <Grid container item xs={4}>
                                    <Controls.Select
                                        variant="outlined"
                                        name="club"
                                        label="Search by Club"
                                        value={values.club}
                                        onChange={handleInputChange}
                                        options={clubs}
                                    />
                                </Grid>
                                &nbsp;
                                <Grid container item xs={4}>
                                    <Controls.Select
                                        variant="outlined"
                                        name="team"
                                        label="Search by Team"
                                        value={values.team}
                                        onChange={handleInputChange}
                                        options={teams}
                                    />
                                </Grid>
                                &nbsp;
                                <Grid container item xs={4}>
                                    <Controls.Select
                                        variant="outlined"
                                        name="match"
                                        label="Search by Match"
                                        value={values.match}
                                        onChange={handleInputChange}
                                        options={matches}
                                    />
                                </Grid>
                                &nbsp;
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Button 
                                disabled={disable} 
                                variant="contained" 
                                color="secondary" 
                                size="large"
                                onClick={() => setDisable(true)}>
                                    Schedule
                            </Button>
                        </Grid>
                    </Form>
            </Paper>
        </React.Fragment>
    )
}

export default MatchSchedule
