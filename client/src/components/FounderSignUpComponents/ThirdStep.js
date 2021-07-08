import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Destructuring props
const ThirdStep = ({
                        handleNext,
                        handleBack,
                        handleChange,
                        values: { companyName, foundedOn, industry },
                        formErrors
                    }) => {
    // Check if all values are not empty or if there are some error
    const isValid =
        companyName.length > 0 &&
        !formErrors.companyName &&
        foundedOn.length > 0 &&
        industry.length > 0 &&
        !formErrors.industry;

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Company name"
                        name="companyName"
                        placeholder="Enter your company name"
                        value={companyName || ""}
                        margin="normal"
                        onChange={handleChange}
                        error={!!formErrors.city}
                        helperText={formErrors.city}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        InputLabelProps={{
                            shrink: true
                        }}
                        label="Year we founded"
                        name="foundedOn"
                        type="date"
                        defaultValue={foundedOn || "2018-12"}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Industry"
                        name="industry"
                        placeholder="eg. Fintech"
                        margin="normal"
                        value={industry || ""}
                        onChange={handleChange}
                        error={!!formErrors.industry}
                        helperText={formErrors.industry}
                        required
                    />
                </Grid>
            </Grid>
            <div
                style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
            >
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
                    disabled={!isValid}
                    color="primary"
                    onClick={isValid ? handleNext : null}
                >
                    Next
                </Button>
            </div>
        </>
    );
};

export default ThirdStep;
