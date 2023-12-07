import React from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { ListItem, createTheme, List, ListItemText, Grid} from '@mui/material';
import { orange } from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Confirm({ nextStep, prevStep, values }) {
    const { firstName, lastName, email, ocupation, city, bio } = values;
    const theme = createTheme({
        status: {
            danger: orange[500],
        },
    });

    function continueForward(e) {
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
                            Confirm your data
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Check Your Data
                    </Typography>
                        <List dense={true}>
                            <ListItem>
                                <ListItemText
                                    primary={firstName}
                                    secondary={'First Name'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={lastName}
                                    secondary={'Last Name'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={email}
                                    secondary={'Email'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={ocupation}
                                    secondary={'Ocupation'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={city}
                                    secondary={'City'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={bio}
                                    secondary={'Bio'}
                                />
                            </ListItem>
                        </List>
                </Grid>

                <Button
                    variant="contained"
                    onClick={continueForward} >
                    Confirm & Continue
                </Button>
                <Button
                    variant="contained"
                    onClick={prevStep} >
                    Go Back
                </Button>
            </React.Fragment>
        </ThemeProvider>
    )
}