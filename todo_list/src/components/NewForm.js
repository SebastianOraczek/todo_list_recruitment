import { useState } from "react";

import Task from "./Task";
import useInputState from '../hooks/useInputState';
import useToggleState from "../hooks/useToggleState";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';

function NewForm(props) {
    const { toggleActive } = props;
    const [listName, setListName] = useInputState("");
    const [taskName, setTaskName, resetTaskName] = useInputState("");
    const [isDone, toggleIsDone] = useToggleState(false);
    const [tasks, setTasks] = useState([]);
    const [isAlert, toggleAlert] = useToggleState(false);

    const addTask = () => {
        if (taskName.length) {
            const name = taskName;
            setTasks([...tasks, { name, isDone }]);
            resetTaskName();
        } else {
            toggleAlert();
        }
    };

    const cancelTasks = () => {
        setTasks([]);
    };

    return (
        <div>
            <div style={{ width: "100vw" }}>
                {isAlert && (
                    <Alert severity="error"
                        onClose={toggleAlert} > Please enter a task name
                    </Alert >
                )}
            </div>
            <Grid container justifyContent="center" alignItems="center">
                <Paper>
                    <form>
                        <input
                            type="text"
                            placeholder="List name"
                            name="List name"
                            value={listName}
                            onChange={setListName}
                        />
                    </form>
                    <form>
                        <Checkbox
                            tabIndex={-1}
                            checked={isDone}
                            onClick={toggleIsDone}
                        />
                        <TextField
                            type="text"
                            placeholder="Task"
                            name="Task"
                            value={taskName}
                            onChange={setTaskName}
                        />
                        <div>
                            <Button variant="contained" color="secondary" onClick={cancelTasks}>Cancel</Button>
                            <Button variant="contained" color="primary" onClick={addTask}>ADD</Button>
                        </div>
                    </form>
                    <div>
                        {tasks.map((task, i) => (
                            <Task {...task}
                                key={i}
                            />
                        ))}
                    </div>
                    <div style={{ marginTop: "4rem" }}>
                        <Button variant="contained" color="secondary" onClick={toggleActive}>Cancel</Button>
                        <Button variant="contained" color="primary">ADD</Button>
                    </div>
                </Paper>
            </Grid>
        </div>
    )
};

export default NewForm;