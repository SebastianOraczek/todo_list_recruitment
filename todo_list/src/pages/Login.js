import React, { useState } from "react";
import { Link } from "react-router-dom";

import useInputState from "../hooks/useInputState";

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

function Login(props) {
    const { history } = props;
    const [identifier, setIdentifier] = useInputState("");
    const [password, setPassword] = useInputState("");
    const [alert, setAlert] = useState(false)

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
        <Paper>
            {alert && (
                <Alert severity="error"
                    onClose={toggleAlert}>Incorrect Login or password
                </Alert>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        autoFocus
                        type="text"
                        label="Email or Username"
                        value={identifier}
                        onChange={setIdentifier}
                    />
                </div>
                <div>
                    <TextField
                        type="Password"
                        label="Password"
                        value={password}
                        onChange={setPassword}
                    />
                </div>
                <Button variant="contained" color="primary" type="submit">Login</Button>
            </form>
            <span>or</span>
            <div>
                <Link to="/register">Create an new account</Link>
            </div>
        </Paper>
    )
};

export default Login;