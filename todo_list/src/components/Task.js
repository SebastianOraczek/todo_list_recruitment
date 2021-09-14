import useToggleState from "../hooks/useToggleState";

import ListItem from "@material-ui/core/ListItem";
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from "@material-ui/styles";
import styles from "../styles/TaskStyles";

function Task(props) {
    const { name, isDone, classes } = props;
    const [taskIsDone, toggleTaskIsDone] = useToggleState(isDone);

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
                value={name}
                className={classes.taskInput}
            />
        </ListItem>
    );
};

export default withStyles(styles)(Task);
