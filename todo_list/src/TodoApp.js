import React from "react";
import { Route, Switch } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import TodoLists from "./pages/TodoLists";

function TodoApp() {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => <h1>Home Page</h1>}
            />
            <Route
                exact
                path="/register"
                render={(routeProps) => <Register {...routeProps} />}
            />
            <Route
                exact
                path="/login"
                render={(routeProps) => <Login {...routeProps} />}
            />
            <Route
                exact
                path="/lists"
                render={(routeProps) => <TodoLists {...routeProps} />}
            />
        </Switch>
    );
};

export default TodoApp;