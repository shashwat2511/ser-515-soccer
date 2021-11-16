import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Paper } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls';
import CircularProgress from '@mui/material/CircularProgress';
// import Box as BoxMUI from '@mui/material/Box';
import { registerTeam } from "../features/team/teamSlice";
import { useHistory } from "react-router";


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' }
]

const USAStateList = [
    { id: '1', state: 'Alabama' },
    { id: '2', state: 'Alaska' },
    { id: '3', state: 'Arizona' },
    { id: '4', state: 'Arkansas' },
    { id: '5', state: 'California' },
    { id: '6', state: 'Colorado' },
    { id: '7', state: 'Connecticut' },
    { id: '8', state: 'Delaware' },
    { id: '9', state: 'Florida' },
    { id: '10', state: 'Georgia' },
    { id: '11', state: 'Hawaii' },
    { id: '12', state: 'Idaho' },
    { id: '13', state: 'Illinois' },
    { id: '14', state: 'Indiana' },
    { id: '15', state: 'Iowa' },
    { id: '16', state: 'Kansas' },
    { id: '17', state: 'Kentucky' },
    { id: '18', state: 'Louisiana' },
    { id: '19', state: 'Maine' },
    { id: '20', state: 'Maryland' },
    { id: '21', state: 'Massachusetts' },
    { id: '22', state: 'Michigan' },
    { id: '23', state: 'Minnesota' },
    { id: '24', state: 'Mississippi' },
    { id: '25', state: 'Missouri' },
    { id: '26', state: 'Montana' },
    { id: '27', state: 'Nebraska' },
    { id: '28', state: 'Nevada' },
    { id: '29', state: 'New Hampshire' },
    { id: '30', state: 'New Jersey' },
    { id: '31', state: 'New Mexico' },
    { id: '32', state: 'New York' },
    { id: '33', state: 'North Carolina' },
    { id: '34', state: 'North Dakota' },
    { id: '35', state: 'Ohio' },
    { id: '36', state: 'Oklahoma' },
    { id: '37', state: 'Oregon' },
    { id: '38', state: 'Pennsylvania' },
    { id: '39', state: 'Rhode Island' },
    { id: '40', state: 'South Carolina' },
    { id: '41', state: 'South Dakota' },
    { id: '42', state: 'Tennessee' },
    { id: '43', state: 'Texas' },
    { id: '44', state: 'Utah' },
    { id: '45', state: 'Vermont' },
    { id: '46', state: 'Virginia' },
    { id: '47', state: 'Washington' },
    { id: '48', state: 'West Virginia' },
    { id: '49', state: 'Wisconsin' },
    { id: '50', state: 'Wyoming' },
];

const division = [
    { id: '11', value: 'blue' },
    { id: '12', value: 'green' },
    { id: '13', value: 'yellow' },
    { id: '14', value: 'purple' },
]

function CoachRegistrationForm() {
    const { isLoadingRegister, errorRegisterCode } = useSelector((state) => state.team);
    const prevIsLoadingRegisterRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (prevIsLoadingRegisterRef.current && !isLoadingRegister) {
            if (errorRegisterCode.length === 0) {
                history.pushState("/payment-info");
            } else {
                alert(`Error: ${errorRegisterCode}`);
            }
        }

        prevIsLoadingRegisterRef.current = isLoadingRegister;
    }, [
        isLoadingRegister,
        errorRegisterCode,
    ]);

    const initialFValues = {
        id: 0,
        coachName: '',
        teamName: '',
        clubName: '',
        mobile: '',
        city: '',
        gender: '',
        stateName: '',
        age: 8,
        division: '',
        fileUplaod: '',
    }

    const validateRegitrationForm = (fieldValues = values) => {
        let temp = { ...errors };

        if ('teamName' in fieldValues)
            temp.teamName = fieldValues.teamName.trim() ? '' : 'This field is required.';
        if ('clubName' in fieldValues)
            temp.clubName = fieldValues.clubName.trim() ? '' : 'This field is required.';
        if ('coachName' in fieldValues)
            temp.coachName = fieldValues.coachName.trim() ? '' : 'This field is required.';
        if ('city' in fieldValues)
            temp.city = (fieldValues.city.trim().length > 0) ? '' : 'This field is required.';
        if ('gender' in fieldValues)
            temp.gender = (fieldValues.gender.trim().length > 0) ? '' : 'This field is required.';
        if ('stateName' in fieldValues)
            temp.stateName = (fieldValues.stateName.trim().length > 0) ? '' : 'This field is required.';
        if ('division' in fieldValues)
            temp.division = (fieldValues.division.trim().length > 0) ? '' : 'This field is required.';

        if ('mobile' in fieldValues) {
            if (fieldValues.mobile.trim().length === 0) {
                temp.mobile = 'This field is required.';
            } else if (isNaN(fieldValues.mobile)) {
                temp.mobile = 'Only numeric values are allowed.';
            } else if (fieldValues.mobile.trim().length < 10) {
                temp.mobile = 'Minimum 10 digits are required.';
            } else {
                temp.mobile = '';
            }
        }

        if ('age' in fieldValues) {
            if (fieldValues.age.length === 0) {
                temp.age = 'This field is required.';
            } else {
                temp.age = '';
            }
        }

        if ('fileUplaod' in fieldValues) {
            console.log(fileRef.current.files);
            if (fileRef.current.files.length === 0) {
                temp.fileUplaod = 'This field is required.';
            } else if (!fileRef.current.files[0].name.includes('.pdf') || !fileRef.current.files[0].type.includes('application/pdf')) {
                temp.fileUplaod = 'File type should only be pdf';
            } else if (Math.round(fileRef.current.files[0].size / 1024) > 2) {
                temp.fileUplaod = 'File should not be greater than 2MB';
            } else {
                temp.fileUplaod = '';
            }
        }

        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFValues, false, true, validateRegitrationForm);

    const boxStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex - start',
        alignItems: 'center',
    }

    const handleRegistrationSubmit = (e) => {
        // alert("here");
        e.preventDefault();
        if (validateRegitrationForm()) {
            alert('testing');
        } else {
            dispatch(registerTeam(values))
        }
    }

    const fileRef = useRef(null);

    return (
        <Box style={boxStyles}>
            <Form autoComplete="on" style={{ backgroundColor: '#FFFFFF' }}>
                <Grid container spacing={1}>
                    <Grid container item>
                        <Grid container item xs={11} >
                            <Controls.Input variant="outlined"
                                label="Team ID"
                                name="teamID"
                                value={values.teamID}
                                onChange={handleInputChange} />
                        </Grid>
                        <Grid container item xs={1} spacing={1}/* style={{ marginTop: '1rem', marginBottom: '1rem' }} */
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Controls.Button
                                variant="contained"
                                color="primary"
                                size="large"
                                text="Log In" />
                        </Grid>
                    </Grid>
                </Grid>
            </Form>

            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Box style={{
                    fontFamily: 'RobotoSlab',
                    fontWeight: 900,
                    fontSize: '1.25em',
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    color: '#ADADAD'
                }}>OR</Box>
            </Grid>

            <Form autoComplete="on" onSubmit={handleRegistrationSubmit} style={{ backgroundColor: '#FFFFFF' }}>
                <Grid container spacing={1}>
                    <Grid container item>
                        <Grid container item xs={4} >
                            <Controls.Input variant="outlined"
                                label="Team Name"
                                name="teamName"
                                value={values.teamName}
                                error={errors.teamName}
                                onChange={handleInputChange} />
                        </Grid>
                        <Grid container item xs={4}>
                            <Controls.Input variant="outlined"
                                label="Club Name"
                                name="clubName"
                                value={values.clubName}
                                error={errors.clubName}
                                onChange={handleInputChange} />
                        </Grid>
                        <Grid container item xs={4}>
                            <Controls.Input variant="outlined"
                                label="Coach Name"
                                name="coachName"
                                value={values.coachName}
                                error={errors.coachName}
                                onChange={handleInputChange} />
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid container item xs={4}>
                            <Controls.Input variant="outlined"
                                label="Age"
                                name="age"
                                type="number"
                                value={values.age}
                                error={errors.age}
                                onChange={handleInputChange} />
                        </Grid>
                        <Grid container item xs={4}>
                            <Controls.RadioGroup
                                label="Gender"
                                name="gender"
                                value={values.gender}
                                onChange={handleInputChange}
                                items={genderItems}
                                error={errors.gender}
                            />
                        </Grid>
                        <Grid container item xs={4}>
                            <Controls.Select
                                variant="outlined"
                                name="division"
                                label="Division"
                                value={values.division}
                                onChange={handleInputChange}
                                options={division}
                                error={errors.division}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid container item xs={4}>
                            <Controls.Input variant="outlined"
                                label="Contact Number"
                                name="mobile"
                                value={values.mobile}
                                error={errors.mobile}
                                onChange={handleInputChange} />
                        </Grid>
                        <Grid container item xs={4}>
                            <Controls.Input variant="outlined"
                                label="City"
                                name="city"
                                value={values.city}
                                error={errors.city}
                                onChange={handleInputChange} />
                        </Grid>
                        <Grid container item xs={4}>
                            <Controls.Select
                                variant="outlined"
                                name="stateName"
                                label="State"
                                value={values.stateName}
                                error={errors.stateName}
                                onChange={handleInputChange}
                                options={USAStateList}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid container item xs={12}>
                            <Controls.Input variant="outlined"
                                label=""
                                name="fileUplaod"
                                value={values.fileUplaod}
                                error={errors.fileUplaod}
                                onChange={handleInputChange}
                                type="file"
                                fileRef={fileRef}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {
                    isLoadingRegister && (
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    )
                }

                <Grid container style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Controls.Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        text="register" />
                </Grid>
            </Form>
        </Box >
    )
}

export default CoachRegistrationForm
