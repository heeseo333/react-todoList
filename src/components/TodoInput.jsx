import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos } = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        value={todoValue}
        placeholder="Enter todo..."
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue(""); // Clear the input after adding the todo
        }}
      >
        Add
      </button>
    </header>
  );
}
