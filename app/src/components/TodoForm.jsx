import React from "react";
import { useState } from "react";

export const TodoForm = ({ dispatch }) => {
  const [input, setInput] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { title: input, id: Date.now(), completed: false }
    });
    setInput("");
  };

  const clearComplete = e => {
    e.preventDefault();
    dispatch({type: "CLEAR_COMPLETE"})
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          placeholder="new todo..."
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <button type="submit">Add Todo</button>
        <button onClick={clearComplete}>Clear Completed</button>
      </form>
    </div>
  );
};
