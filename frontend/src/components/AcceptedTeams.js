import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls';
import { Box } from '@mui/system';

const division = [
    { id: '11', value: 'blue' },
    { id: '12', value: 'green' },
    { id: '13', value: 'yellow' },
    { id: '14', value: 'purple' },
]

function AcceptedTeams() {
    const initialFValues = {
        accTeamsdivision: '',
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFValues, false, true);

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();
        // console.log(btnRef.current);
    }

    return (
        <Form autoComplete="on" onSubmit={handleRegistrationSubmit} style={{ backgroundColor: '#FFFFFF' }}>
            <Grid container spacing={1}>
                <Grid container item>
                    <Grid container item xs={1}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Box style={{ fontWeight: 700 }}>2021 Teams : </Box>
                    </Grid>
                    <Grid container item xs={2} >
                        <Controls.Select
                            variant="outlined"
                            name="accTeamsdivision"
                            label="Divisions"
                            value={values.accTeamsdivision}
                            onChange={handleInputChange}
                            options={division}
                        />
                    </Grid>
                    <Grid container item xs={1} style={{ marginLeft: '1rem' }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Controls.Button
                            variant="contained"
                            color="secondary"
                            size="medium"
                            text="See Teams" />
                    </Grid>
                </Grid>
            </Grid>
        </Form>
    )
}

export default AcceptedTeams
