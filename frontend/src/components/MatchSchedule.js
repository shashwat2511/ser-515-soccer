import { Grid, Paper, Button } from '@material-ui/core'
import { Box } from '@mui/system'
import React from 'react'
import './../css/SSSFilter.css';
import Controls from './controls/Controls';
import { Form, useForm } from './useForm';

const team = [
    { id: '11', value: 'blue' },
    { id: '12', value: 'green' },
    { id: '13', value: 'yellow' },
    { id: '14', value: 'purple' },
]

const match = [
    { id: '11', value: 'match1'},
    { id: '12', value: 'match2'},
    { id: '13', value: 'match3'},
    { id: '14', value: 'match4'},
    { id: '15', value: 'match5'},
    { id: '16', value: 'match6'},
    { id: '17', value: 'match7'},
    { id: '18', value: 'match8'},
    { id: '19', value: 'match9'},
    { id: '20', value: 'match10'},
    { id: '21', value: 'match11'},
    { id: '22', value: 'match12'},
    { id: '23', value: 'match13'},
    { id: '24', value: 'match14'},
    { id: '25', value: 'match15'},
    { id: '26', value: 'match16'},
    { id: '27', value: 'match17'},
    { id: '28', value: 'match18'},
    { id: '29', value: 'match19'},
    { id: '30', value: 'match20'},
    { id: '31', value: 'match21'},
    { id: '32', value: 'match22'},
    { id: '33', value: 'match23'},
    { id: '34', value: 'match24'},
    { id: '35', value: 'match25'},
    { id: '36', value: 'match26'},
    { id: '37', value: 'match27'},
    { id: '38', value: 'match28'},
    { id: '39', value: 'match29'},
    { id: '40', value: 'match30'},
]

function MatchSchedule(){
    const initialFValues = {
        sByTeam: '',
        sByMatch: ''
    }

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

    const [disable, setDisable] = React.useState(false);

    return (
        <React.Fragment>
            <Paper style={{ width: "100%"}} elevation={6} className="paperTab">
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
                                        name="sByTeam"
                                        label="Search by Team"
                                        value={values.sByTeam}
                                        onChange={handleInputChange}
                                        options={team}
                                    />
                                </Grid>
                                &nbsp;
                                <Grid container item xs={4}>
                                    <Controls.Select
                                        variant="outlined"
                                        name="sByMatch"
                                        label="Search by Match"
                                        value={values.sByMatch}
                                        onChange={handleInputChange}
                                        options={match}
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
