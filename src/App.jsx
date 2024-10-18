// added embedded fonts in index.html
// functional components - fun names always capitialized

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState(["GO TO THE GYM", "WALK THE DOG"]);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodos(Selectedindex) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== Selectedindex;
    });
    setTodos(newTodoList);
  }

  function handleEditTodos(Selectedindex) {}

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </main>
  );
}

export default App;
