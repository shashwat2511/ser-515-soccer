import React from 'react'
import "date-fns";
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useHistory } from "react-router";

const  PaymentDetails = () => {
    const history = useHistory()
    return (
        <Grid container justifyContent="center">
            <Grid xs={5} item>
                <Box>
                    <Box py={6}>
                        <Typography variant="h5"> Payment Page</Typography>
                    </Box>
                    <Grid container direction="row" >
                        <Grid item xs={6}>
                            <Box p={1}>
                                <TextField fullWidth id="fname" label="First Name" variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box p={1}>
                                <TextField fullWidth id="lname" label="Last Name" variant="outlined" />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box p={1}>
                                <TextField fullWidth id="card-details" label="Card Number" type="number" variant="outlined" />
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box p={1}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
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
                                <Button onClick={() =>  history.push("/payment_info")} fullWidth variant="contained" color="secondary">Cancel</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>)
}

export default PaymentDetails
