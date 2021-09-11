import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import useInputState from "../hooks/useInputState";
import styles from "../styles/LoginStyles";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Grid from "@material-ui/core/Grid";

function Login(props) {
    const { history, classes } = props;

    const [identifier, setIdentifier] = useInputState("");
    const [password, setPassword] = useInputState("");
    const [alert, setAlert] = useState(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const user = { identifier, password };

        try {
            const url = "https://recruitment.ultimate.systems/auth/local";
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)

            });
            console.log(res);

            if (res.status === 200) {
                window.localStorage.setItem("user", JSON.stringify(user));
                history.push("/lists");
            } else {
                setAlert(true);
            };

        } catch (err) {
            console.log(err);
        };
    };

    const toggleAlert = () => {
        setAlert(false);
    };

    return (
        <div>
            {alert && (
                <Alert severity="error"
                    onClose={toggleAlert} > Incorrect Login or password
                </Alert >
            )}
            <Grid container justifyContent="center" alignItems="center">
                <Paper className={classes.container} >
                    <p className={classes.login}>Login</p>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.inputBox}>
                            <input
                                type="text"
                                autoFocus
                                value={identifier}
                                onChange={setIdentifier}
                                placeholder="Email or Username"
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.inputBox}>
                            <input
                                type="Password"
                                placeholder="Password"
                                className={classes.input}
                                value={password}
                                onChange={setPassword}
                            />
                        </div>
                        <div className={classes.buttonBox}>
                            <Button variant="contained" type="submit" className={classes.button}>Login</Button>
                        </div>
                    </form>
                    <span className={classes.span}>or</span>
                    <div className={classes.linkBox}>
                        <Link to="/register" className={classes.link}>Create an new account</Link>
                    </div>
                </Paper >
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Login);