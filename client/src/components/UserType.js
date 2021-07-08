import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './styles/UserType.css'
import Container from '@material-ui/core/Container';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "15rem",
        justifySelf: "center",
    },
    buttonCenter: {
        display: "flex",
         flexDirection: "column",
    },
    button: {
        margin: theme.spacing(1),
        width: 125
    },
}));

    const UserType = () => {
        const classes = useStyles();
        return (
            <Container className={classes.root}>
                <div className={classes.buttonCenter}>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    endIcon={<MonetizationOnIcon/>}
                >
                    Investor
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    endIcon={<EmojiObjectsIcon/>}
                >
                    Founder
                </Button>
                </div>
            </Container>
        );
    };

export default UserType;
