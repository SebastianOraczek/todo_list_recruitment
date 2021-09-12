import React, { useState } from "react";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField"

import Todo from "./Todo";

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: true }
]

function TodoList(props) {
    const { classes } = props;
    const [todos, setTodos] = useState(defaultTodos);

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Paper>
                <Grid item >
                    <TextField
                        placeholder="Search"
                    />
                    <TextField
                        placeholder="Sort by"
                    />
                </Grid>
                <Grid item>
                    <ul>
                        {todos.map((todo, i) => (
                            <React.Fragment key={i}>
                                <Todo {...todo} />
                            </React.Fragment>
                        ))}
                    </ul>
                </Grid>
                <Button variant="contained" type="submit">ADD</Button>
            </Paper>
        </Grid>
    )
};

export default TodoList;