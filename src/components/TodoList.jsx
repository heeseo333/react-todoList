//rfc
//to render out a children component in a component go to the said component and recieve the children
// via as props
import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <>
      <ul className="main">
        {todos.map((todo, index) => {
          return (
            <TodoCard {...props} key={index} index={index}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </>
  );
}
