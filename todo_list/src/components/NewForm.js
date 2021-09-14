import { memo, useState, useContext } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

import Task from "./Task";
import useInputState from '../hooks/useInputState';
import useToggleState from "../hooks/useToggleState";
import { TodoListContext } from "../contexts/TodosContext";

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/NewFormStyles";

function NewForm(props) {
    const { classes, allList, setAllList } = props;
    const [isDone, toggleIsDone] = useState(false);
    const [taskName, setTaskName, resetTaskName] = useInputState("");
    const [isAlertTask, toggleAlertTask] = useToggleState(false);
    const [isAlertListName, toggleAlertListName] = useToggleState(false);
    const {
        todoList, setTodoList,
        tasks, setTasks,
        listName, setListName, resetListName,
        toggleActive,
    } = useContext(TodoListContext);

    const addTask = () => {
        if (taskName.length > 0) {
            const name = taskName;
            setTasks([...tasks, { name, isDone }]);
            setTodoList({ task: [...todoList.task, ...tasks] });
            resetTaskName();
            toggleIsDone(false);
        } else {
            toggleAlertTask();
        };
    };

    const cancelTasks = () => {
        setTasks([]);
    };

    const handleCancelList = () => {
        cancelTasks();
        toggleActive();
    };

    const handleSave = async () => {
        if (listName.length > 0) {
            setTodoList({ ...todoList, name: listName });

            const name = listName;
            const task = tasks;
            const jwt = window.localStorage.getItem("jwt");
            const url = "https://recruitment.ultimate.systems/to-do-lists";
            const res = await axios.post(url, { name, task }, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    "Content-Type": "application/json"
                }
            });
            handleRes(res);
            handleCancelList();
            resetListName();
        } else {
            toggleAlertListName();
        };
    };

    const handleRes = (res) => {
        const name = res.data.name
        const id = res.data.id
        const published = res.data.published_at
        const task = res.data.task

        setAllList([...allList, { name, task, id, published }]);
    };

    return (
        <div>
            <div style={{ width: "100vw" }}>
                {isAlertTask && (
                    <Alert severity="error" onClose={toggleAlertTask}>Please enter a task</Alert >
                )}
                {isAlertListName && (
                    <Alert severity="error" onClose={toggleAlertListName}>Please enter a list name</Alert >
                )}
            </div>
            <Dialog open={true} style={{ marginBottom: "15rem", height: "100vh" }}>
                <DialogContent className={classes.container}>
                    <form>
                        <div className={classes.listInputBox}>
                            <input
                                type="text"
                                placeholder="Enter a list name"
                                name="List name"
                                value={listName}
                                onChange={setListName}
                                className={classes.listInput}
                            />
                        </div>
                        <Divider className={classes.divider} />
                        <div>
                            {tasks.map((task, i) => (
                                <Task {...task} key={i} />
                            ))}
                        </div>
                        <section>
                            <Checkbox
                                tabIndex={-1}
                                checked={isDone}
                                onClick={() => toggleIsDone(!isDone)}
                                className={classes.checkbox}
                            />
                            <input
                                type="text"
                                placeholder="Task name"
                                name="Task name"
                                value={taskName}
                                onChange={setTaskName}
                                className={classes.taskInput}
                            />
                        </section>
                        <div className={classes.buttonBox}>
                            <Button variant="contained" color="secondary" onClick={cancelTasks} className={classes.cancelBtn}>
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={addTask} className={classes.addBtn}>
                                ADD
                            </Button>
                        </div>
                        <div className={classes.buttonBox2}>
                            <Link to="/lists" onClick={handleCancelList} className={classes.cancelBtn2}>
                                Cancel
                            </Link>
                            <Button variant="contained" onClick={handleSave} className={classes.saveBtn}>
                                Save
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(memo(NewForm));