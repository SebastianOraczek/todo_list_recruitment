import React, { useState } from "react";

import useInputState from "../hooks/useInputState";

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

function Register(props) {
    const { history } = props;
    const [username, changeUsername] = useInputState("");
    const [email, changeEmail] = useInputState("");
    const [password, changePassword] = useInputState("");
    const [repPassword, changeRepPassword] = useInputState("");
    const [alert, setAlert] = useState(false)

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if (password && password === repPassword) {
            const user = { username, email, password };
            console.log(user);

            try {
                const url = "https://recruitment.ultimate.systems/auth/local/register";
                const res = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user)
                });
                console.log(res);
                history.push("/login");
            } catch (err) {
                console.log(err);
            };

        } else {
            setAlert(true);
        };
    };

    const toggleAlert = () => {
        setAlert(false);
    };

    return (
        <Paper>
            {alert && (
                <Alert severity="error"
                    onClose={toggleAlert}>Password must be the same!
                </Alert>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        type="text"
                        label="Username"
                        name="Username"
                        value={username}
                        onChange={changeUsername}
                        autoFocus
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        type="email"
                        label="Email"
                        name="Email"
                        value={email}
                        onChange={changeEmail}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        type="password"
                        label="Password"
                        name="Password"
                        value={password}
                        onChange={changePassword}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        type="password"
                        label="Repeat Password"
                        name="Repeat Password"
                        value={repPassword}
                        onChange={changeRepPassword}
                        margin="normal"
                    />
                </div>
                <Button variant="contained" color="secondary" type="submit">Register</Button>
            </form>
        </Paper>
    )
};

export default Register;