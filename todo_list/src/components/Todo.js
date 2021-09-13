import { useEffect, useContext } from "react";
import axios from "axios";

import { JwtContext } from "../contexts/TodosContext";

import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

function Todo(props) {
    const { name } = props;
    const { jwt } = useContext(JwtContext);

    useEffect(() => {

    })

    return (
        <ListItem style={{ height: "64px" }}>
            <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};

export default Todo;