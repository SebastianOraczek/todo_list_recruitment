import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from '@material-ui/core/Checkbox';

import useToggleState from "../hooks/useToggleState";

function Task(props) {
    const { name, isDone } = props;
    const [taskIsDone, toggleTaskIsDone] = useToggleState(isDone);

    return (
        <ListItem style={{ height: "64px" }}>
            <Checkbox
                tabIndex={-1}
                checked={taskIsDone}
                onClick={toggleTaskIsDone}
            />
            <ListItemText>
                {name}
            </ListItemText>
        </ListItem>

    );
};

export default Task;
