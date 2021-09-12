import React from "react";
import { Route, Switch } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

function TodoApp() {
    return (
        <div>
            {/* style={{ background: "rgba(0,0,0,0.9)", height: "100vh" }} */}
            <Navbar />
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
                    render={(routeProps) => <TodoList {...routeProps} />}
                />
                <Route
                    exact
                    path="lists/:id"
                    render={(routeProps) => <Todo {...routeProps} />}
                />
            </Switch>
        </div>
    );
};

export default TodoApp;