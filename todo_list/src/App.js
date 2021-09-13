import React from "react";
import TodoApp from './TodoApp';
import { TodosProvider } from "./contexts/TodosContext";

function App() {
  return (
    <div>
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
    </div>
  );
}

export default App;
