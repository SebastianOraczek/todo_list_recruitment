import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Todo from "./Todo";
import NewForm from "./NewForm";
import { TodoListContext } from "../contexts/TodosContext";

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/TodoListStyles";

function TodoList(props) {
    const { classes } = props;
    const { isActive, toggleActive } = useContext(TodoListContext);
    const [allList, setAllList] = useState([]);
    const [published, setPublished] = useState("");

    useEffect(() => {
        const jwt = window.localStorage.getItem("jwt");
        const url = "https://recruitment.ultimate.systems/to-do-lists";
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                setAllList(res.data)
                handlePublished(res)
            })
            .catch(err => console.log(err))
    }, []);

    // Niweluje błąd dotyczący published_at = undefined
    const handlePublished = (res) => {
        for (let i = 0; i < res.data.length; i++) {
            const oneList = res.data[i]
            setPublished(oneList.published_at)
        };
    };

    return (
        <Grid container justifyContent="center" alignItems="center">
            {isActive
                ? <NewForm
                    allList={allList}
                    setAllList={setAllList}
                />
                : (
                    <Grid item>
                        <Paper className={classes.container}>
                            <List>
                                {allList.map((item, i) => (
                                    <Todo key={i} {...item} published={published} />
                                ))}
                            </List>
                            <div className={classes.addBtnBox}>
                                <IconButton onClick={toggleActive}>
                                    <AddCircleIcon className={classes.addBtn} />
                                </IconButton>
                            </div>
                        </Paper>
                    </Grid>
                )
            }
        </Grid >
    );
};

export default withStyles(styles)(TodoList);