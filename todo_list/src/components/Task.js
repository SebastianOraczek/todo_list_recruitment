// import { useState } from "react";

import useToggleState from "../hooks/useToggleState";
import useInputState from "../hooks/useInputState";

import ListItem from "@material-ui/core/ListItem";
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/styles";
import styles from "../styles/TaskStyles";

function Task(props) {
    const { name, isDone, classes, } = props;
    const [taskIsDone, toggleTaskIsDone] = useToggleState(isDone);
    const [editedTask, setEditedTask] = useInputState(name);

    // const { id, tasks, setTasks } = props;
    // const [taskHelper, setTaskHelper] = useState({});
    // const handleEdit = () => {
    //     const name = editedTask;
    //     const isDone = taskIsDone;
    //     const id = props.id;
    //     setTaskHelper({ name, isDone, id })

    //     if (taskHelper.id === tasks.map(t => t.id)) {
    //         return
    //     }
    // };

    return (
        <ListItem className={classes.box}>
            <Checkbox
                tabIndex={-1}
                checked={taskIsDone}
                onClick={toggleTaskIsDone}
                className={classes.checkbox}
            />
            <input
                type="text"
                name="task"
                value={editedTask}
                onChange={setEditedTask}
                className={classes.taskInput}
            />
            <IconButton aria-label="Edit"
            // onClick={handleEdit}
            >
                <EditIcon />
            </IconButton>
        </ListItem>
    );
};

export default withStyles(styles)(Task);