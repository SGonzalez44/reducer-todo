import React from "react";
import { Todo } from "./Todo";


export const TodoList = ({state, dispatch}) => {
  const markComplete = (id) => {
    dispatch({type: "MARK_COMPLETE", payload: id})
  }
  
  return (
    <div>
      {state.todos.map(todo => (
        <Todo markComplete={markComplete} key={todo.id} {...todo} />
      ))}
    </div>
  );
};
