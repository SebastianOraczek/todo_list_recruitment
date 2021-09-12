import React, { useState } from "react";

import Todo from "./Todo";
import NewForm from "./NewForm";
import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";

const defaultTodos = [
    { id: 1, name: "Mow the lawn using goats", completed: false },
    { id: 2, name: "Release lady bugs into garden", completed: true }
]

function TodoList(props) {
    const [search, setSearch, resetSearch] = useInputState("");
    const [todos, setTodos] = useState(defaultTodos);
    const [isActive, toggleActive] = useToggleState(false);

    return (
        <Grid container justifyContent="center" alignItems="center">
            {isActive
                ? <NewForm
                    toggleActive={toggleActive}
                />
                : (
                    <Paper>
                        <Grid item>
                            <TextField
                                placeholder="Search"
                                name="Search"
                                value={search}
                                onChange={setSearch}
                            />
                            <List>
                                {todos.map((todo, i) => (
                                    <Todo {...todo} key={i} />
                                ))}
                            </List>
                            <Button variant="contained" color="primary" onClick={toggleActive}>ADD</Button>
                        </Grid>
                    </Paper>
                )
            }
        </Grid>
    )
};

export default TodoList;