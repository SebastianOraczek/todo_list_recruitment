import useInputState from "../hooks/useInputState";
import useToggleState from '../hooks/useToggleState';

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
    const [username, changeUsername] = useInputState("");
    const [email, changeEmail] = useInputState("");
    const [password, changePassword] = useInputState("");
    const [repPassword, changeRepPassword] = useInputState("");
    const [isAlert, toggle] = useToggleState(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (password && password === repPassword) {
            const user = { username, email, password };

            const url = "https://recruitment.ultimate.systems/auth/local/register";
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });

            res.status === 200
                ? history.push("/login")
                : toggle();

        } else {
            toggle();
        };
    };

    const backPage = () => {
        history.goBack();
    };

    return (
        <div>
            {isAlert && (
                <Alert severity="error" onClose={toggle}>
                    Something went wrong
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
                                value={password}
                                onChange={changePassword}
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
                            <Button variant="contained" type="submit" className={classes.button}>
                                Create
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Register);
