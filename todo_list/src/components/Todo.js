import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/TodoStyles";

function Todo(props) {
    const { name, id, task, classes, published } = props;

    // Przekształcenie daty na DD-MM-RRRR
    const date = published.substr(0, 10).split("-").reverse().join("-");

    // Liczba zadań zrobiony oraz niezrobionych
    const completed = task.filter(t => t.isDone === true).length;
    const uncompleted = task.filter(t => t.isDone === false).length;

    return (
        <div>
            <Link to={`/lists/${id}`} className={classes.container}>
                <ListItem className={classes.item}>
                    <ListItemText>
                        <p className={classes.name}>{name}</p>
                    </ListItemText>
                    <ListItemText>
                        <p className={classes.create}>Created at: {date} </p>
                    </ListItemText>
                    <ListItemText>
                        <p className={classes.complete}>Completed: {completed} Uncompleted at: {uncompleted} All: {task.length}</p>
                    </ListItemText>
                </ListItem>
            </Link>
        </div>
    );
};

export default withStyles(styles)(Todo);