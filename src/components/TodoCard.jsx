import React, { useState } from "react";

export default function TodoCard(props) {
  const {
    editIndex,
    children,
    handleDeleteTodos,
    index,
    handleEditTodos,
    todo,
    handleSaveEdit,
  } = props;
  const isEditing = index == editIndex;
  const [editValue, setEditValue] = useState(todo);
  return (
    <li className="todoItem">
      {isEditing ? (
        <div>
          <input
            value={editValue}
            type="text"
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button
            onClick={() => {
              handleSaveEdit(editValue);
            }}
          >
            save
          </button>
        </div>
      ) : (
        <span>{children}</span>
      )}{" "}
      <div className="actionsContainer">
        <button
          onClick={(e) => {
            handleEditTodos(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button
          onClick={() => {
            handleDeleteTodos(index);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
