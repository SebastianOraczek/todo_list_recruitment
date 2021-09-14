import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

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
        setListElement,
    } = useContext(TodoListContext);
    const [allList, setAllList] = useState([]);

    useEffect(() => {
        const jwt = window.localStorage.getItem("jwt");
        const url = "https://recruitment.ultimate.systems/to-do-lists";
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => setAllList(res.data)).
            catch(err => console.log(err))
    }, []);

    return (
        <Grid container justifyContent="center" alignItems="center">
            {isActive
                ? <NewForm
                    toggleActive={toggleActive}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    tasks={tasks}
                    setTasks={setTasks}
                    setListName={setListName}
                    listName={listName}
                    setListElement={setListElement}
                    allList={allList}
                    setAllList={setAllList}
                />
                : (
                    <Paper>
                        <Grid item>
                            <List>
                                {allList.map((item, i) => (
                                    <Todo key={i} {...item} />
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