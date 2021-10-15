import { Box, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' }
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}

const departmentDemoItems = [
    { id: '1', title: 'Department' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
    { id: '5', title: 'IT' },
]

function CoachRegistrationForm() {
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);

    return (
        <Form autoComplete="off">
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input variant="outlined"
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange} />
                    <Controls.Input variant="outlined"
                        label="Email ID"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange} />
                    <Controls.Input variant="outlined"
                        label="Mobile Number"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange} />
                    <Controls.Input variant="outlined"
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        label="Gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        variant="outlined"
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={departmentDemoItems}
                    />

                    <Controls.DatePicker
                        variant="inline"
                        inputVariant="outlined"
                        formate="MMM/dd/yyyy"
                        name="hireDate"
                        label="Pick up a Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Person"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />

                    <Box>
                        <Controls.Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            text="Submit" />
                    </Box>
                </Grid>
            </Grid>
        </Form>
    )
}

export default CoachRegistrationForm
