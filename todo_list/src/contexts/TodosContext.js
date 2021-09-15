import { createContext, useState } from "react";

import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

export const TodoListContext = createContext();

export function TodosProvider(props) {
    // Podstawowa lista zadań
    const [todoList, setTodoList] = useState({ name: "", task: [] });
    // Zadania dodawane podczas tworzenia listy
    const [tasks, setTasks] = useState([]);
    // Ustawienie nazwy listy
    const [listName, setListName, resetListName] = useInputState("");
    // Aktywacja formularza do tworzenia listy
    const [isActive, toggleActive] = useToggleState(false);

    return (
        <TodoListContext.Provider value={{
            todoList, setTodoList,
            tasks, setTasks,
            listName, setListName, resetListName,
            isActive, toggleActive
        }}>
            {props.children}
        </TodoListContext.Provider>
    );
};