import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Task from "./Task";
import { TodoListContext } from "../contexts/TodosContext";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
// import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/NewFormStyles";

function TodoElement(props) {
    const { classes } = props;
    const { id } = props.match.params;

    const {
        tasks,
        listName, setListName,
    } = useContext(TodoListContext);

    console.log(tasks)

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Paper className={classes.container}>
                <form>
                    <div className={classes.listInputBox}>
                        <input
                            type="text"
                            name="List name"
                            defaultValue={listName}
                            className={classes.listInput}
                        />
                    </div>
                    <Divider className={classes.divider} />
                    <div>
                        {tasks.map((task, i) => (
                            <Task {...task} key={i} />
                        ))}
                    </div>
                    <div>
                        <Checkbox
                            tabIndex={-1}
                            className={classes.checkbox}
                        />
                        <input
                            type="text"
                            placeholder="Task name"
                            name="Task name"
                            className={classes.taskInput}
                        />
                    </div>
                    <div className={classes.buttonBox}>
                        <Button variant="contained" color="secondary"
                            className={classes.cancelBtn}
                        >
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary"
                            className={classes.addBtn}
                        >
                            ADD
                        </Button>
                    </div>
                    <div className={classes.buttonBox2}>
                        <Link to="/lists" className={classes.cancelBtn2}>
                            Cancel
                        </Link>
                        <Button variant="contained" color="primary"
                            className={classes.saveBtn}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    )
};

export default withStyles(styles)(TodoElement);