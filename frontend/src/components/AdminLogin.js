import { Button, Checkbox, FormControlLabel, Grid, SvgIcon, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import React from 'react';

export const AdminLogin = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={5}>
                <Box sx={{my:8, mx:4, display:'flex', flexDirection:'column', alignItems: 'center'}}>
                    <HomeIcon color="primary" />
                    <Typography variant="h5">Login</Typography>
                    &nbsp;
                    <Box onSubmit={handleSubmit} sx={{mt:2}}>
                    <Grid container direction="row" >
                        <Grid item xs={12}>
                            <Box p={1}>
                                <TextField sm={5} style={{width:'100%'}} variant="outlined" required id="username" label="User name" margin="normal" autoFocus />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box p={1}>
                            <TextField sm={5} style={{width:'100%'}} variant="outlined" required id="password" label="Password" margin="normal" autoFocus />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box p={1}>
                                <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember me" />
                            </Box>
                        </Grid>    
                    </Grid>
                    </Box>
                    &nbsp;
                    <Grid item xs={5}>
                        <Box p={1}>
                            <Button fullWidth variant="contained" color="primary">Login</Button>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
