import React, { useContext } from "react";

import Todo from "./Todo";
import NewForm from "./NewForm";
import { TodoListContext } from "../contexts/TodosContext";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

function TodoList(props) {
    const {
        todoList, setTodoList,
        tasks, setTasks,
        listName, setListName,
        isActive, toggleActive,
        todos,
    } = useContext(TodoListContext);

    return (
        <Grid container justifyContent="center" alignItems="center">
            {isActive
                ? <NewForm
                    toggleActive={toggleActive}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    tasks={tasks}
                    setTasks={setTasks}
                    listName={listName}
                    setListName={setListName}
                />
                : (
                    <Paper>
                        <Grid item>
                            <List>
                                {todos.map((todo, i) => (
                                    <Todo {...todo} key={i} />
                                ))}
                            </List>
                            <Button variant="contained" color="primary" onClick={toggleActive}>ADD</Button>
                        </Grid>
                    </Paper>
                )
            }
        </Grid>
    );
};

export default TodoList;