import { Button, Checkbox, FormControlLabel, Grid, Paper, SvgIcon, TextField, Typography } from '@material-ui/core'
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
        <Grid container component="main" sx={{height: '100vh'}}>
            <Grid item xs={12} sm={18} md={15} component={Paper} elevation={6} square>
                <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <HomeIcon color="primary" />
                    <Typography variant="h5">Login</Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{mt:2}}>
                        <TextField sm={5} style={{width:'100%'}}  required id="username" label="User name" margin="normal" autoFocus />
                        <TextField sm={5} style={{width:'100%'}}  required id="password" label="Password" margin="normal" autoFocus />
                        <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember me" />    
                    </Box>
                    &nbsp;
                    <Button type="submit" fullwidth variant="contained" sx={{mt:3, mb:2}} color="primary">Login</Button>
                </Box>
            </Grid>
        </Grid>
    )
}
