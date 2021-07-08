import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {CssBaseline} from "@material-ui/core";
import Header from "./LandingPageComponents/Header";
import Picker from "./LandingPageComponents/Picker";
import InvestorCard from "./LandingPageComponents/InvestorCard";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/wal.jpg'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Picker />
        </div>
    );
};

export default LandingPage;
