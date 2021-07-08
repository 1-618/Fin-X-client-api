import React, {Fragment, useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import {Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center"
    },
    formControl: {
        margin: theme.spacing(3),
    },

}));
// Destructuring props
const ThirdStep = ({
                       handleBack,
                       handleNext,
                   }) => {
    const classes = useStyles();
    // Check if all values are not empty or if there are some error


        const [checkValues, setCheckValues] = useState({
            fintech: false,
            cloud: false,
            edtech: false,
            healthtech: false,
            agritech: false,
            ecomm: false,
            saas: false,
            social: false
        })

            const handleCheck = (event) => {
                setCheckValues({ ...checkValues, [event.target.name]: event.target.checked });
            };


    return (
        <Fragment>
            <Typography>Pick your the industries of interest</Typography>
                <div className={classes.root}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        {/*<FormLabel component="legend">Pick your the industries of interest</FormLabel>*/}
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={checkValues.fintech} onChange={handleCheck} name="fintech" />}
                                label="Fintech"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkValues.cloud} onChange={handleCheck} name="cloud" />}
                                label="Cloud"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkValues.edtech} onChange={handleCheck} name="edtech" />}
                                label="Edtech"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkValues.social} onChange={handleCheck} name="social" />}
                                label="Social"
                            />
                        </FormGroup>
                        {/*} <FormHelperText>Be careful</FormHelperText>*/}
                    </FormControl>
                    <FormControl required component="fieldset" className={classes.formControl}>
                        {/*<FormLabel component="legend">Pick two</FormLabel>*/}
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={checkValues.healthtech} onChange={handleCheck} name="healthtech" />}
                                label="health"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkValues.ecomm} onChange={handleCheck} name="ecomm" />}
                                label="E-commerce"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkValues.saas} onChange={handleCheck} name="saas" />}
                                label="SaaS"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkValues.agritech} onChange={handleCheck} name="agritech" />}
                                label="Agritech"
                            />
                        </FormGroup>
                        {/*} <FormHelperText>You can display an error</FormHelperText>*/}
                    </FormControl>
                </div>
            <Button
                variant="contained"
                color="default"
                onClick={handleBack}
                style={{ marginRight: 10 }}
            >
                Back
            </Button>
                <Button
                    variant="contained"

                    color="primary"
                    onClick={handleNext}
                >
                    Next
                </Button>
        </Fragment>
    );
};

export default ThirdStep;
