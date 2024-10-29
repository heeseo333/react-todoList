// added embedded fonts in index.html
// functional components - fun names always capitialized

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(["GO TO THE GYM", "WALK THE DOG"]);
  const [editIndex, setEditIndex] = useState();

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodos(Selectedindex) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== Selectedindex;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodos(index) {
    setEditIndex(index);
  }

  function handleSaveEdit(editInput) {
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? editInput : todo
    );
    persistData(updatedTodos);
    setTodos(updatedTodos);
    setEditIndex(null);
  }
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos).todos); // Update state with localStorage data
    }
  }, []);

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
        handleSaveEdit={handleSaveEdit}
        editIndex={editIndex}
        todos={todos}
      />
    </main>
  );
}

export default App;
