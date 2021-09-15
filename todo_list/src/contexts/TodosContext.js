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
    // Wszystkie listy pobrane z serwera
    const [allList, setAllList] = useState([]);
    // Stan przechowywujący format daty dodania zadania
    const [published, setPublished] = useState("");
    // Stan boolean, zmienia url do żądania (asc, desc)
    const [isSorted, toggleIsSorted] = useToggleState(false);

    return (
        <TodoListContext.Provider value={{
            todoList, setTodoList,
            tasks, setTasks,
            listName, setListName, resetListName,
            isActive, toggleActive,
            allList, setAllList,
            published, setPublished,
            isSorted, toggleIsSorted
        }}>
            {props.children}
        </TodoListContext.Provider>
    );
};