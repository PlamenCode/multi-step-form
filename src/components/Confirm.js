import React from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

export default function FormUserDetails({ nextStep, handleChange, values }) {
    const theme = createTheme({
        status: {
          danger: orange[500],
        },
      });

    function continueForward(e){
        e.preventDefault();
        //process form data
        nextStep();
    };
  return (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h5" color="inherit" component="div">
                        Enter User Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <TextField 
                hintText='Enter your First Name'
                label='First Name'
                onChange={(e) => handleChange('firstName', e )}
                defaultValue={values.firstName}
            />
            <br />
            <TextField 
                hintText='Enter your Last Name'
                label='Last Name'
                onChange={(e) => handleChange('lastName', e )}
                defaultValue={values.lastName}
            />
            <br />
            <TextField 
                hintText='Enter your Email'
                label='Email'
                onChange={(e) => handleChange('email', e )}
                defaultValue={values.email}
            />
            <br />
            <Button 
                variant="contained"
                onClick={continueForward} >
                Continue
            </Button>
        </React.Fragment>
    </ThemeProvider>
  )
}