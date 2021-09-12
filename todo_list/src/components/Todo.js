import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Todo(props) {
    const { task } = props;

    return (
        <ListItem style={{ height: "64px" }}>
            <ListItemText>{task}</ListItemText>
        </ListItem >
    );
};

export default Todo;