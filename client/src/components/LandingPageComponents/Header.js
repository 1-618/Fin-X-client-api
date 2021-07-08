import React, { useState, useEffect }from 'react';
import {Collapse, makeStyles} from "@material-ui/core";
import {AppBar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SortIcon from '@material-ui/icons/Sort';
import Toolbar from "@material-ui/core/Toolbar";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
        fontFamily: 'Nunito'

    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    appbarTitle: {
        flexGrow: '1'
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#5aff3d'
    },
    container: {
        textAlign: 'center'
    },
    normalText: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '3rem'
    },
    goDown: {
        color: '#5aff3d',
        fontSize: '4rem'
    }
}));

const MyComponent = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        Fin<span className={classes.colorText}>-X</span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(checked ? {timeout: 3000} : {})} collapsedHeight={40}>
                <div className={classes.container}>
                    <h1 className={classes.normalText}>
                        Fin<span className={classes.colorText}>d -</span> Connec<span className={classes.colorText}>t -</span> buil<span className={classes.colorText}>d</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
};

export default MyComponent;
