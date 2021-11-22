import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls';
import { Box } from '@mui/system';
import './../css/SSSFilter.css';
import axios from 'axios';

const division = [
    { id: '11', value: 'blue' },
    { id: '12', value: 'green' },
    { id: '13', value: 'yellow' },
    { id: '14', value: 'purple' },
]

const dates = [
    { id: '11', value: '2021-12-15' },
    { id: '12', value: '2021-12-16' },
    { id: '13', value: '2021-12-17' },
];

const venues = [
    { id: '11', value: 'Warrior Soccer Complex (WSC)' }
];

const clubs = [
    { id: '11', value: 'Alliance Cincinnati Soccer Clubblue' },
    { id: '12', value: 'Auglaize Mercer United' },
    { id: '13', value: 'Barca Academy Columbus' },
    { id: '14', value: 'Bluffton SC' },
    { id: '15', value: 'Butler United Soccer Club' },
    { id: '16', value: 'Central Ohio Elite' },
    { id: '17', value: 'Charleston Clash' },
    { id: '18', value: 'Cincinnati United' },
    { id: '19', value: 'Cincinnati United Premier' },
    { id: '20', value: 'Cincinnati United Premier Soccer Club (OHS)' },
    { id: '21', value: 'Cincinnati United Soccer Club' },
    { id: '22', value: 'Cincinnati United Southeast' },
    { id: '23', value: 'Cincinnati West' },
    { id: '24', value: 'Cleveland Kickers SC' },
    { id: '25', value: 'Dayton Futbol Academy' },
    { id: '26', value: 'Dayton Kroc Soccer Club' },
    { id: '27', value: 'Dublin Soccer Excel' },
    { id: '28', value: 'Dublin United Soccer Club' },
    { id: '29', value: 'ECLIPSE EAST' },
]

function SSSFilter() {
    const initialFValues = {
        sByDivision: '',
        sByDay: '',
        sByVenue: '',
        sByTeam: '',
        sByClub: '',
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
        var url = new URL(document.location);

        if (values.sByDivision != null) {
            url.searchParams.append('division', values.sByDivision);
        }

        if (values.sByDay != null) {
            url.searchParams.append('division', values.sByDay);
        }

        if (values.sByVenue != null) {
            url.searchParams.append('division', values.sByVenue);
        }

        if (values.sByTeam != null) {
            url.searchParams.append('division', values.sByTeam);
        }

        if (values.sByClub != null) {
            url.searchParams.append('division', values.sByClub);
        }

        alert(url);
    }

    useEffect(() => {
        let param = (new URL(document.location)).searchParams;
        let division = param.get('division');
        let day = param.get('day');
        let venue = param.get('venue');
        let team = param.get('team');
        let club = param.get('club');
        let temp = {};
        let thereIsAValue = false;

        console.log("division : " + division);
        console.log("day : " + day);
        console.log("venue : " + venue);
        console.log("team : " + team);
        console.log("club : " + club);

        if (division != null) {
            temp = {
                ...temp,
                "division": division
            };
            thereIsAValue = true;
        }

        if (day != null) {
            temp = {
                ...temp,
                "day": day
            };
            thereIsAValue = true;
        }

        if (venue != null) {
            temp = {
                ...temp,
                "venue": venue
            };
            thereIsAValue = true;
        }

        if (team != null) {
            temp = {
                ...temp,
                "team": team
            };
            thereIsAValue = true;
        }

        if (club != null) {
            temp = {
                ...temp,
                "club": club
            };
            thereIsAValue = true;
        }

        console.log(temp);
        if (thereIsAValue) {
            axios.post('https://jsonplaceholder.typicode.com/posts', temp)
                .then((response) => {
                })
                .catch((error) => {
                });
        }
    }, []);

    return (
        <React.Fragment>
            <Grid container
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
            >
                <Box className="sssFilterDeclarationHead">2021 Game Schedule</Box>
                <Box className="sssFilterDeclarationContent">Select one of the following searches to find your team's games. Game times, location and opponents subject to change. Scores are posted as soon as available, but subject to change in the event of a review.</Box>
                <Box className="sssFilterDividor"></Box>
            </Grid>
            <Form autoComplete="on" onSubmit={handleRegistrationSubmit}>
                <Grid container spacing={1}>
                    <Grid container item>
                        <Grid container item xs={4}>
                            <Controls.Select
                                variant="outlined"
                                name="sByDivision"
                                label="Search by Division"
                                value={values.sByDivision}
                                onChange={handleInputChange}
                                options={division}
                            />
                        </Grid>
                        <Grid container item xs={4}>
                            <Controls.Select
                                variant="outlined"
                                name="sByDay"
                                label="Search by Day"
                                value={values.sByDay}
                                onChange={handleInputChange}
                                options={dates}
                            />
                        </Grid>
                        <Grid container item xs={4}>
                            <Controls.Select
                                variant="outlined"
                                name="sByVenue"
                                label="Search by Venue"
                                value={values.sByVenue}
                                onChange={handleInputChange}
                                options={venues}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid container item xs={6}>
                            <Controls.Select
                                variant="outlined"
                                name="sByTeam"
                                label="Search by Team"
                                value={values.sByTeam}
                                onChange={handleInputChange}
                                options={division}
                            />
                        </Grid>
                        <Grid container item xs={6}>
                            <Controls.Select
                                variant="outlined"
                                name="sByClub"
                                label="Search by Club"
                                value={values.sByClub}
                                onChange={handleInputChange}
                                options={clubs}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container style={{ marginTop: '1rem', marginBottom: '0.3rem' }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Controls.Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        text="See Games"
                    />
                </Grid>
            </Form>
        </React.Fragment>
    );
}

export default SSSFilter
