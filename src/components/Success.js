import React from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';


export default function Success() {
    const theme = createTheme({
        status: {
            danger: orange[500],
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h5" color="inherit" component="div">
                           Success
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h1>Thank you for your Submission</h1>
                <p>You will get an email with further instructions</p>
            </React.Fragment>
        </ThemeProvider>
    )
}