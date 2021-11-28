import { Grid, Paper, Button, CircularProgress } from '@material-ui/core'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './../css/SSSFilter.css';
import { Form } from './useForm';

function MatchSchedule(){

    const [disable, setDisable] = useState(false);
    const [checkScheduled, setcheckScheduled] = useState(false);
    
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/v1/scheduleMatches/", {
            method: "GET",
            headers: {  "Content-Type": "application/json", } })
            .then(res => res.json())
            .catch(err => console.log(err));
            setLoading(false);
            setcheckScheduled(true);
    }

    useEffect( async () => {
     const response = await   fetch("http://localhost:5000/api/v1/checkMatchesScheduled/", {
            method: "GET",
            headers: {  "Content-Type": "application/json", } })
            .then(res => res.json())
            .catch(err => console.log(err));
    if(response["count"] == 0) {
        //button should be enabled
        setDisable(false);
    } else  {
        //button should be disabled
        setDisable(true);
    } 
    }, [checkScheduled]);

    return (
        <React.Fragment>
            <Paper style={{ width: "100%"}} elevation={3} className="paperTab">
                <Grid container justifyContent="center">
                    <Grid xs={11} item>
                        <Box py={1.5} className="sssFilterDeclarationHead">2021 Game Schedule</Box>
                        <Box className="sssFilterDeclarationContent">Scheduling matches to Teams!!!</Box>
                        <Box className="sssFilterDividor"></Box>
                        &nbsp;
                    </Grid>
                </Grid>
                    <Form autoComplete="on">
                        <Grid container justifyContent="center">
                        <Box m={24} style={{position:"relative"}}>
                            <Button 
                                disabled={disable} 
                                variant="contained" 
                                color="secondary" 
                                size="large"
                                onClick={handleSubmit}
                                >
                                Schedule
                            </Button>
                            {loading && ( <CircularProgress style={{position:"absolute", top: '50%',
                                            left: '50%',
                                            marginTop: '-12px',
                                            marginLeft: '-12px',}} size={24}  />    )}
                            </Box>
                        </Grid>
                    </Form>
            </Paper>
        </React.Fragment>
    )
}
// onClick={() => setDisable(true)}
export default MatchSchedule
