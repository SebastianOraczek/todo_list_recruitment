import { useContext, useState } from "react";
import { RegisterContext } from "../contexts/TodosContext";

import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/RegisterStyles";

function Register(props) {
    const { history, classes } = props;
    const {
        username, changeUsername,
        email, changeEmail,
        passwordRegister, changePasswordRegister,
        repPassword, changeRepPassword,
        isAlertRegister, toggleAlertRegister
    } = useContext(RegisterContext);

    const [jwt, setJwt] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (passwordRegister && passwordRegister === repPassword) {
            const user = { username, email, passwordRegister, jwt };
            console.log(user);

            const url = "https://recruitment.ultimate.systems/auth/local/register";
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });
            console.log(res);

            if (res.status === 200) {
                history.push("/login")
            } else {
                toggleAlertRegister();
            }

        } else {
            toggleAlertRegister();
        };
    };

    const backPage = () => {
        history.goBack();
    };

    return (
        <div>
            {isAlertRegister && (
                <Alert severity="error"
                    onClose={toggleAlertRegister}>Something went wrong
                </Alert>
            )}
            <Grid container justifyContent="center" alignItems="center">
                <Paper className={classes.container}>
                    <IconButton aria-label="Back" className={classes.arrow} onClick={backPage}>
                        <ArrowBackIcon />
                    </IconButton>
                    <p className={classes.text}>Create an new account </p>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.inputBox}>
                            <input
                                type="text"
                                placeholder="Username"
                                name="Username"
                                value={username}
                                onChange={changeUsername}
                                autoFocus
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.inputBox}>
                            <input
                                type="email"
                                placeholder="Email"
                                name="Email"
                                value={email}
                                onChange={changeEmail}
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.inputBox}>
                            <input
                                type="password"
                                placeholder="Password"
                                name="Password"
                                value={passwordRegister}
                                onChange={changePasswordRegister}
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.inputBox}>
                            <input
                                type="password"
                                placeholder="Repeat Password"
                                name="Repeat Password"
                                value={repPassword}
                                onChange={changeRepPassword}
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.buttonBox}>
                            <Button variant="contained" type="submit" className={classes.button}>Create</Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Register);