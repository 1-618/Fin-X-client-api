import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InvestorCard from "./InvestorCard";
import userType from '../../static/userType'
import FounderCard from "./FounderCard";
import useWindowPosition from '../../hook/useWindowPosition'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
}))

const Picker = () => {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="place-to-visit">
            <InvestorCard checked={checked} />
            <FounderCard checked={checked} />
        </div>
    );
};

export default Picker;
