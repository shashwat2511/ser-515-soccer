import React, { useState, useEffect } from "react";
import { Grid, Paper } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls';
import { Box } from '@mui/system';
import './../css/SSSFilter.css';
import axios from 'axios';
import { DataGrid } from "@material-ui/data-grid";
import { teamList } from '../demoJSONs/teamList';

function SSSFilter() {
    const [tableData, setTableData] = useState([]);

    const [divisions, setDivisions] = useState([]);
    const [dates, setDates] = useState([]);
    const [venues, setVenues] = useState([]);
    const [teams, setTeams] = useState([]);
    const [clubs, setClubs] = useState([]);

    const columns = [
        { field: 'field_id', headerName: 'FIELD ID', minWidth: 100, flex: 1, headerClassName: 'super-app-theme--header', },
        { field: 'ground_number', headerName: 'GROUND NUMBER', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
        { field: 'match_date', headerName: 'MATCH DATE', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
        { field: 'match_division', headerName: 'MATCH DIVISION', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
        { field: 'match_time', headerName: 'MATCH TIME', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
        { field: 'team_1_club_name', headerName: 'T1 CLUB NAME', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
        { field: 'team_1_id', headerName: 'TEAM 1', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
        { field: 'team_2_club_name', headerName: 'T2 CLUB NAME', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
        { field: 'team_2_id', headerName: 'TEAM 2', minWidth: 200, flex: 2, headerClassName: 'super-app-theme--header', },
    ];

    const initialFValues = {
        division: '',
        day: '',
        venue: '',
        team_id: '',
        club_name: '',
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
        let thereIsAValue = false;
        let data = {};

        if (values.division !== null && values.division.trim() !== '') {
            thereIsAValue = true;
            data = {
                ...data,
                "division": values.division
            };
            url.searchParams.append('division', values.division);
        } else {
            data = {
                ...data,
                "division": ""
            };
        }

        if (values.day !== null && values.day.trim() !== '') {
            thereIsAValue = true;
            data = {
                ...data,
                "day": values.day
            };
            url.searchParams.append('division', values.day);
        } else {
            data = {
                ...data,
                "day": ""
            };
        }

        if (values.venue !== null && values.venue.trim() !== '') {
            thereIsAValue = true;
            data = {
                ...data,
                "venue": values.venue
            };
            url.searchParams.append('division', values.venue);
        } else {
            data = {
                ...data,
                "venue": ""
            };
        }

        if (values.team_id !== null && values.team_id.trim() !== '') {
            thereIsAValue = true;
            data = {
                ...data,
                "team": values.team_id
            };
            url.searchParams.append('division', values.team_id);
        } else {
            data = {
                ...data,
                "team": ""
            };
        }

        if (values.club_name !== null && values.club_name.trim() !== '') {
            thereIsAValue = true;
            data = {
                ...data,
                "club": values.club_name
            };
            url.searchParams.append('division', values.club_name);
        } else {
            data = {
                ...data,
                "club": ""
            };
        }

        if (thereIsAValue) {
            setValues(data);
            axios.post('https://jsonplaceholder.typicode.com/posts', data)
                .then((response) => {
                    setTableData(teamList);
                })
                .catch((error) => {
                });
        }
        alert(url);
    };

    const handleCellClick = (param, event) => {
        console.log(param);
        console.log(event);
        if (param.colIndex === 2) {
            event.stopPropagation();
        }
    };

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/getFilterParams/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
        }).then((res) => res.json())
            .then((result) => {
                setDivisions(result.division);
                setDates(result.day);
                setVenues(result.venue);
                setTeams(result.teams);
                setClubs(result.club);
                alert(JSON.stringify(result));
                console.log(JSON.stringify(result.club));
            })
            .catch((e) => {
            });

        let param = (new URL(document.location)).searchParams;
        let division = param.get('division');
        let day = param.get('day');
        let venue = param.get('venue');
        let team = param.get('team');
        let club = param.get('club');
        let data = {};
        let thereIsAValue = false;

        if (division !== null && division.trim() !== '') {
            data = {
                ...data,
                "division": division
            };
            thereIsAValue = true;
        } else {
            data = {
                ...data,
                "division": ""
            };
        }

        if (day !== null && day.trim() !== '') {
            data = {
                ...data,
                "day": day
            };
            thereIsAValue = true;
        } else {
            data = {
                ...data,
                "day": ""
            };
        }

        if (venue !== null && venue.trim() !== '') {
            data = {
                ...data,
                "venue": venue
            };
            thereIsAValue = true;
        } else {
            data = {
                ...data,
                "venue": ""
            };
        }

        if (team !== null && team.trim() !== '') {
            data = {
                ...data,
                "team_id": team
            };
            thereIsAValue = true;
        } else {
            data = {
                ...data,
                "team_id": ""
            };
        }

        if (club !== null && club.trim() !== '') {
            data = {
                ...data,
                "club_name": club
            };
            thereIsAValue = true;
        } else {
            data = {
                ...data,
                "club_name": ""
            };
        }

        data = {
            "division": "Red",
            "day": "2021-12-15",
            "venue": "",
            "team_id": 1,
            "club_name": "Shashwat Club"
        }
        fetch("http://localhost:5000/api/v1/filterMatches/", {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
        }).then((res) => res.json())
            .then((result) => {
                setTableData(result.matches);
                // alert(result);
                console.log(result);
            })
            .catch((e) => {
            });
    }, []);



    return (
        <React.Fragment>
            <Box className="sssMainDiv">
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
                                    name="division"
                                    label="Search by Division"
                                    value={values.division}
                                    onChange={handleInputChange}
                                    options={divisions}
                                />
                            </Grid>
                            <Grid container item xs={4}>
                                <Controls.Select
                                    variant="outlined"
                                    name="day"
                                    label="Search by Day"
                                    value={values.day}
                                    onChange={handleInputChange}
                                    options={dates}
                                />
                            </Grid>
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
                        </Grid>
                        <Grid container item>
                            <Grid container item xs={6}>
                                <Controls.Select
                                    variant="outlined"
                                    name="team_id"
                                    label="Search by Team"
                                    value={values.team_id}
                                    onChange={handleInputChange}
                                    options={teams}
                                />
                            </Grid>
                            <Grid container item xs={6}>
                                <Controls.Select
                                    variant="outlined"
                                    name="club_name"
                                    label="Search by Club"
                                    value={values.club_name}
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

                <Box className="sssTableBox" style={{
                    height: '27rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <DataGrid style={{
                        width: '90%',
                        height: '90%',
                        backgroundColor: '#FFFFFF'
                    }} className='teamTable'
                        rows={tableData}
                        columns={columns}
                        pageSize={5}
                        disableSelectionOnClick
                        rowsPerPageOptions={[15, 30, 45, 60, 75, 90]}
                        onCellClick={handleCellClick}
                    ></DataGrid>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default SSSFilter
