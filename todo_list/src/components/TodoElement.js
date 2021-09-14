import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Task from "./Task";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/NewFormStyles";

function TodoElement(props) {
    const { classes, history } = props;
    const { id } = props.match.params;

    const [listName, setListName] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const jwt = window.localStorage.getItem("jwt");
        const url = `https://recruitment.ultimate.systems/to-do-lists/${id}`;
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => handleResGET(res))
            .catch(err => console.log(err))
    }, []);

    const handleResGET = (res) => {
        setListName(res.data.name)
        setTasks([...res.data.task]);
    };

    const saveList = async () => {
        const name = listName;
        const task = tasks;
        const jwt = window.localStorage.getItem("jwt");
        const url = `https://recruitment.ultimate.systems/to-do-lists/${id}`;
        await axios.put(url, { name, task }, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json"
            }
        });
        history.push("/lists");
    };

    const deleteList = async () => {
        const jwt = window.localStorage.getItem("jwt");
        const url = `https://recruitment.ultimate.systems/to-do-lists/${id}`;
        await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json"
            }
        });
        history.push("/lists");
    };

    return (
        <Dialog open={true} style={{ marginBottom: "15rem", height: "100vh" }}>
            <DialogContent className={classes.container}>
                <form>
                    <div className={classes.listInputBox}>
                        <input
                            type="text"
                            name="List name"
                            defaultValue={listName}
                            onChange={evt => setListName(evt.target.value)}
                            className={classes.listInput}
                        />
                    </div>
                    <Divider className={classes.divider} />
                    <div>
                        {tasks.map((task, i) => (
                            <Task key={i} {...task} />
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
                        <Button variant="contained" color="secondary"
                            className={classes.deleteBtn} onClick={deleteList}
                        >
                            Delete List
                        </Button>
                        <Button variant="contained"
                            className={classes.saveBtn} onClick={saveList}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default withStyles(styles)(TodoElement);