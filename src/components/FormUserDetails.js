import React from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function FormUserDetails({ nextStep, handleChange, values }) {
    const theme = createTheme({
        status: {
          danger: orange[500],
        },
      });

    function continueForward(e){
        e.preventDefault();
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
        </React.Fragment>
    </ThemeProvider>
  )
}
