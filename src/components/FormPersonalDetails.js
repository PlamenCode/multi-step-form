import React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

export default function FormPersonalDetails({ nextStep, handleChange, prevStep, values }) {
    const theme = createTheme({
        status: {
          danger: orange[500],
        },
      });

    function continueForward(e){
        e.preventDefault();
        nextStep();
    };

    function returnToLastStep(e){
        e.preventDefault();
        prevStep();
    }
  return (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h5" color="inherit" component="div">
                        Enter Personal Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <TextField 
                hintText='Enter your ocupation'
                label='Ocupation'
                onChange={(e) => handleChange('ocupation', e )}
                defaultValue={values.ocupation}
            />
            <br />
            <TextField 
                hintText='Enter your City'
                label='City'
                onChange={(e) => handleChange('city', e )}
                defaultValue={values.city}
            />
            <br />
            <TextField 
                hintText='Enter your Bio'
                label='Bio'
                onChange={(e) => handleChange('bio', e )}
                defaultValue={values.bio}
            />
            <br />
            <Button 
                variant="contained"
                onClick={continueForward} >
                Continue
            </Button>
            <br />
            <Button 
                variant="contained"
                onClick={returnToLastStep} >
                Retern
            </Button>
        </React.Fragment>
    </ThemeProvider>
  )
}
