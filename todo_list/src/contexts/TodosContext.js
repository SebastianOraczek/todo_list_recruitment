import { createContext, useState } from "react";

import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

export const RegisterContext = createContext();
export const TodoListContext = createContext();
export const JwtContext = createContext();

export function TodosProvider(props) {
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
        <TodoListContext.Provider value={{
            todoList, setTodoList,
            tasks, setTasks,
            listName, setListName,
            isActive, toggleActive,
            listElement, setListElement,
        }}>
            {props.children}
        </TodoListContext.Provider>
    );
};