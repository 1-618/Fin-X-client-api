import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Collapse} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(0, 0, 0, 0.5)',
        margin: '20px'
    },
    media: {
        height: 440,
    },
    title: {
        alignItems: 'center',
        fontFamily: 'Nunito',
        fontWeight: "bold",
        fontSize: '1rem',
        color: '#5aff3d'
    },
    desc: {
        fontFamily: 'Nunito',
        fontSize: '1.2rem',
        color: '#fff'
    }
});

export default function FounderCard({ checked }) {
    const classes = useStyles();

    return (
        <Collapse in={checked} {...(checked ? {timeout: 3000} : {})}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                        Looking to take your startup to the next level?
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                        Sign up as a
                    </Typography>
                    <br/>
                    <Link to='/investor'>
                    <Button variant="outlined" type="button">
                        <Typography variant="h5" component="h2" className={classes.title}>
                            Startup
                        </Typography>
                    </Button>
                    </Link>
                </CardContent>
            </Card>
        </Collapse>
    );
}
