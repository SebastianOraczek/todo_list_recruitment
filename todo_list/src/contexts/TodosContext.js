import { createContext, useState } from "react";

import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

export const LoginContext = createContext();
export const RegisterContext = createContext();
export const TodoListContext = createContext();
export const JwtContext = createContext();

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
    // Jedna lista zadań
    const [todoList, setTodoList] = useState({ name: "", task: [] });
    // Zadania dodawane podczas tworzenia listy
    const [tasks, setTasks] = useState([]);
    // Ustawienie nazwy listy
    const [listName, setListName] = useInputState("");
    // Aktywacja formularza do tworzenia listy
    const [isActive, toggleActive] = useToggleState(false);
    const [listElement, setListElement] = useState({});

    return (
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
                    listElement, setListElement,
                }}>
                    {props.children}
                </TodoListContext.Provider>
            </RegisterContext.Provider>
        </LoginContext.Provider>
    );
};