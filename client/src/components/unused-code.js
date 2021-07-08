// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: "flex",
//         justifyContent: "center",
//         justifySelf: "center",
//         '& > *': {
//             margin: theme.spacing(4),
//             width: '30ch',
//         },
//     },
//
//     paper: {
//         width: "30vw",
//         marginTop: "10rem"
//     },
//
//     formCenter: {
//         display: "flex",
//         flexDirection: "column",
//     }
// }));
//
// const LogIn = () => {
//     const classes = useStyles();
//
//     return (
//         <Container className={classes.paper}>
//         <Card classesName={classes.paper}>
//             <div className={classes.root}>
//                  <form className={classes.formCenter} noValidate autoComplete="off">
//                     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//                      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//                      <Button
//                          variant="contained"
//                          color="default"
//                          className={classes.button}
//                      >
//                          Log in
//                      </Button>
//                 </form>
//             </div>
//         </Card>
//             <Button
//                 variant="contained"
//                 color="default"
//                 className={classes.button}
//             >
//                 New to us? sign in
//             </Button>
//         </Container>
//     );
// };
//
// export default LogIn;
