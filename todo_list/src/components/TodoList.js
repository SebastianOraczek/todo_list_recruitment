import React, { useContext, useEffect } from "react";
import axios from "axios";

import Todo from "./Todo";
import NewForm from "./NewForm";
import { TodoListContext } from "../contexts/TodosContext";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/TodoListStyles";

function TodoList(props) {
    const { classes } = props;
    const { isActive, toggleActive,
        allList, setAllList,
        published, setPublished,
        isSorted, toggleIsSorted
    } = useContext(TodoListContext);

    // Piersze renderowanie listy
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

    // Sortowanie listy
    const resToSorted = () => {
        const toggleUrl = () => {
            if (isSorted) return "https://recruitment.ultimate.systems/to-do-lists?_sort=id:ASC";
            return "https://recruitment.ultimate.systems/to-do-lists?_sort=id:DESC";

        };

        const jwt = window.localStorage.getItem("jwt");
        axios.get(toggleUrl(), {
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

        toggleIsSorted();
    };

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
                            <div className={classes.inputsAbove}>
                                <input
                                    type="text"
                                    name="Search"
                                    placeholder="Search"
                                    className={classes.searchInput}
                                />
                                <Button variant="contained" onClick={resToSorted} className={classes.sortBtn}>Sort</Button>
                            </div>
                            <main>
                                <List>
                                    {allList.map((item, i) => (
                                        <Todo key={i} {...item} published={published} />
                                    ))}
                                </List>
                            </main>
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