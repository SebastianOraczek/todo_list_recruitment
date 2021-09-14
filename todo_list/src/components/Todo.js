import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

function Todo(props) {
    const { name, task, published, id } = props;

    const date = published.substr(0, 10).split("-").reverse().join("-");
    const completed = task.filter(t => t.isDone === true).length;
    const uncompleted = task.filter(t => t.isDone === false).length;

    return (
        <Link to={`/lists/${id}`}>
            <ListItem style={{ height: "64px" }}>
                <ListItemText>{name}</ListItemText>
                <ListItemText>Created at: {date}</ListItemText>
                <ListItemText>Completed {completed}</ListItemText>
                <ListItemText>Uncompleted at: {uncompleted}</ListItemText>
                <ListItemText>All: {task.length}</ListItemText>
            </ListItem>
        </Link>
    );
};

export default Todo;