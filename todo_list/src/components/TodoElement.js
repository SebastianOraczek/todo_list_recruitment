import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Task from "./Task";
import useInputState from "../hooks/useInputState";

import Button from '@material-ui/core/Button';
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
    const [individualTaskName, setIndividualTaskName, resetTaskName] = useInputState("");
    const [newTask, setNewTask] = useState([]);
    const [isDone, setIsDone] = useState(false);

    // React Hook useEffect has a missing dependency...
    useEffect(() => {
        const jwt = window.localStorage.getItem("jwt");
        const url = `https://recruitment.ultimate.systems/to-do-lists/${id}`;
        function fetchData() {
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    "Content-Type": "application/json"
                }
            })
                .then(res => {
                    setListName(res.data.name)
                    setTasks([...res.data.task])
                })
                .catch(err => console.log(err))
        };
        fetchData();
    }, []);

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

    const cancel = () => {
        history.push("/lists");
    };

    const addTask = () => {
        if (individualTaskName.length > 0) {
            const name = individualTaskName;
            setNewTask({ name, isDone })
            setTasks([...tasks, { name, isDone }]);
            setIsDone(false);
            resetTaskName();
        };
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
                            <Task key={i} {...task} tasks={tasks} setTasks={setTasks} />
                        ))}
                    </div>
                    <div>
                        <Checkbox
                            tabIndex={-1}
                            className={classes.checkbox}
                            checked={isDone}
                            onChange={() => setIsDone(!isDone)}
                        />
                        <input
                            type="text"
                            placeholder="Task name"
                            name="Task name"
                            value={individualTaskName}
                            onChange={setIndividualTaskName}
                            className={classes.taskInput}
                        />
                    </div>
                    <div className={classes.buttonBox}>
                        <Button variant="contained" color="secondary" className={classes.cancelBtn} onClick={cancel}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" className={classes.addBtn} onClick={addTask}>
                            ADD
                        </Button>
                    </div>
                    <div className={classes.buttonBox2}>
                        <Link to="/lists" className={classes.cancelBtn2}>
                            Cancel
                        </Link>
                        <Button variant="contained" color="secondary" className={classes.deleteBtn} onClick={deleteList}>
                            Delete List
                        </Button>
                        <Button variant="contained" className={classes.saveBtn} onClick={saveList}>
                            Save
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default withStyles(styles)(TodoElement);