import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

function Todo(props) {
    const { name } = props;

    return (
        <ListItem style={{ height: "64px" }}>
            <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};

export default Todo;