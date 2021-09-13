import { createContext, useState } from "react";

import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

export const LoginContext = createContext();
export const RegisterContext = createContext();
export const TodoListContext = createContext();
export const JwtContext = createContext();

const defaultTodos = [
    { id: 1, name: "Mow the lawn using goats", completed: false },
    { id: 2, name: "Release lady bugs into garden", completed: true }
]

export function TodosProvider(props) {

    // Stany dla komponentu Login
    const [identifier, setIdentifier, resetIdentifier] = useInputState("");
    const [password, setPassword, resetPassword] = useInputState("");
    const [isAlert, toggle] = useToggleState(false);

    // Stany dla komponentu Register
    const [username, changeUsername] = useInputState("");
    const [email, changeEmail] = useInputState("");
    const [passwordRegister, changePasswordRegister] = useInputState("");
    const [repPassword, changeRepPassword] = useInputState("");
    const [isAlertRegister, toggleAlertRegister] = useToggleState(false);

    // Stany dla komponentu TodoList, które częściowo przekazywane są do komponentu NewForm
    const [todoList, setTodoList] = useState({ name: "", task: [] });
    const [tasks, setTasks] = useState([]);
    const [listName, setListName] = useInputState("");
    const [todos, setTodos] = useState(defaultTodos);
    const [isActive, toggleActive] = useToggleState(true);

    // Stan pozwalający na otrzymanie jwt
    const [jwt, setJwt] = useState("");

    return (
        <JwtContext.Provider value={{
            jwt, setJwt
        }}
        >
            <LoginContext.Provider value={{
                identifier, setIdentifier, resetIdentifier,
                password, setPassword, resetPassword,
                isAlert, toggle,
            }}>
                <RegisterContext.Provider value={{
                    username, changeUsername,
                    email, changeEmail,
                    passwordRegister, changePasswordRegister,
                    repPassword, changeRepPassword,
                    isAlertRegister, toggleAlertRegister
                }}>
                    <TodoListContext.Provider value={{
                        todoList, setTodoList,
                        tasks, setTasks,
                        listName, setListName,
                        isActive, toggleActive,
                        todos, setTodos
                    }}>
                        {props.children}
                    </TodoListContext.Provider>
                </RegisterContext.Provider>
            </LoginContext.Provider>
        </JwtContext.Provider>
    );
};