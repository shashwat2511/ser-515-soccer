import React from 'react'
import "date-fns";
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { alpha } from '@material-ui/core/styles'
import DateFnsUtils from "@date-io/date-fns";
import { useHistory, useLocation } from "react-router-dom";
import config from '../Constants';
import { useFormTeamReg, Form } from './useFormTeamReg';
import Controls from './controls/Controls';


const  PaymentGateway = () => {
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    

    const submitPaymentAmount = () => {
        fetch(config.BASE_URL + "teamFeePayment/", {
            // body: JSON.stringify(finalFormValues),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Request-Headers": "Content-Type"
            },
        }).then((res) => res.json())
            .then((result) => {
                console.log(result)
                // history.push("/payment-gateway", {'team_id': result.team_id})
            })
            .catch((e) => {
            });

    };
    const initialFValues = {
        first_name: '',
        last_name: '',
        card_number: '',
        expiry_date: '',
        cvv: ''
    };

    const validatePaymentForm = (fieldValues = finalFormValues) => {
        let temp = { ...errors };

        if ('first_name' in fieldValues)
            temp.first_name = fieldValues.first_name.trim() ? '' : 'This field is required.';
        if ('last_name' in fieldValues)
            temp.last_name = fieldValues.last_name.trim() ? '' : 'This field is required.';
        if ('card_number' in fieldValues)
            temp.card_number = fieldValues.card_number.trim() ? '' : 'This field is required.';
        if ('expiry_date' in fieldValues)
            temp.expiry_date = (fieldValues.expiry_date.trim().length > 0) ? '' : 'This field is required.';
        if ('cvv' in fieldValues)
            temp.cvv = (fieldValues.cvv.trim().length > 0) ? '' : 'This field is required.';
        
        if ('primary_contact' in fieldValues) {
            if (fieldValues.primary_contact.trim().length === 0) {
                temp.primary_contact = 'This field is required.';
            } else if (isNaN(fieldValues.primary_contact)) {
                temp.primary_contact = 'Only numeric values are allowed.';
            } else if (fieldValues.primary_contact.trim().length < 10) {
                temp.primary_contact = 'Minimum 10 digits are required.';
            } else {
                temp.primary_contact = '';
            }
        }

        if ('age_group' in fieldValues) {
            if (fieldValues.age_group.length === 0) {
                temp.age_group = 'This field is required.';
            } else {
                temp.age_group = '';
            }
        }

        setErrors({
            ...temp
        });

        if (fieldValues === finalFormValues) {
            return Object.values(temp).every(x => x === "");
        }
    }

    const {
        finalFormValues,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useFormTeamReg(initialFValues, false, true, validatePaymentForm);

    const boxStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex - start',
        alignItems: 'center',
    }

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        if (validatePaymentForm()) {
            submitPaymentAmount();
        }
    }


    return (
        <Grid container justifyContent="center">
            <Grid xs={5} item>
                <Box>
                    <Box py={6}>
                        <Typography variant="h5"> Payment Page</Typography>
                    </Box>
                    <Form autoComplete="on" onSubmit={handlePaymentSubmit} style={{ backgroundColor: '#FFFFFF' }}>
                        <Grid container direction="row" >
                            <Grid item xs={6}>
                                <Box p={1}>
                                    {/* <TextField fullWidth id="fname" 
                                    label="First Name" variant="outlined" /> */}
                                    <Controls.Input variant="outlined"
                                    label="First Name"
                                    name="first_name"
                                    value={finalFormValues.first_name}
                                    error={errors.first_name}
                                    onChange={handleInputChange} />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box p={1}>
                                    {/* <TextField fullWidth id="lname" label="Last Name" variant="outlined" /> */}
                                    <Controls.Input variant="outlined"
                                    label="Last Name"
                                    name="last_name"
                                    value={finalFormValues.last_name}
                                    error={errors.last_name}
                                    onChange={handleInputChange} />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box p={1}>
                                    {/* <TextField fullWidth id="card-details" label="Card Number" type="number" variant="outlined" /> */}
                                    <Controls.Input variant="outlined"
                                    label="Card Number"
                                    name="card_number"
                                    value={finalFormValues.card_number}
                                    error={errors.card_number}
                                    onChange={handleInputChange} />
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={1}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justifyContent="space-around">
                                            <DatePicker fullWidth format="mm/yy"
                                                inputVariant="outlined"
                                                views={['year', 'month']}
                                                label="Expiry Date"
                                                // minDate={new Date('2012-03-01')}
                                                // maxDate={new Date('2023-06-01')}
                                                value={new Date()}
                                                onChange={() => { }}
                                            />
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box p={1}>
                                    <TextField fullWidth id="cvv" label="CVV" type="number" variant="outlined" />
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box p={1}>
                                    <Button  fullWidth variant="contained" color="primary">Pay 100$</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box p={1}>
                                    <Button 
                                    /*onClick={() =>  history.push("/payment_info")}*/ 
                                    fullWidth variant="contained" color="secondary">Cancel</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Form>    
                </Box>
            </Grid>
        </Grid>)
}

export default PaymentGateway
