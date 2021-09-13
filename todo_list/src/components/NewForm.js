// import axios from "axios";
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
    const {
        toggleActive,
        tasks, setTasks,
        listName, setListName,
        todoList, setTodoList
    } = props;
    const [isDone, toggleIsDone] = useToggleState(false);
    const [taskName, setTaskName, resetTaskName] = useInputState("");
    const [isAlert, toggleAlert] = useToggleState(false);

    console.log(todoList)

    const addTask = () => {
        if (taskName.length) {
            const name = taskName;
            setTasks([...tasks, { name, isDone }]);
            setTodoList({ task: [...todoList.task, ...tasks] });
            resetTaskName();
        } else {
            toggleAlert();
        };
    };

    const cancelTasks = () => {
        setTasks([]);
    };

    const handleSave = () => {
        setTodoList({ ...todoList, name: listName });
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
                        <div>
                            <input
                                type="text"
                                placeholder="Enter a list name"
                                name="List name"
                                value={listName}
                                onChange={setListName}
                            />
                        </div>
                        <div>
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
                        </div>
                        <div>
                            {tasks.map((task, i) => (
                                <Task {...task} key={i} />
                            ))}
                        </div>
                        <div style={{ marginTop: "2rem" }}>
                            <Button variant="contained" color="secondary" onClick={toggleActive}>Cancel</Button>
                            <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default NewForm;

// {
//     name: "LIST",
//     task: [
//         {
//           name: "task1",
//           isDone: false,
//     ]
// }