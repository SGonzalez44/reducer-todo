import React from 'react';
import { useReducer } from 'react';
import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm';
import { initialState, todoReducer } from './reducers/todoReducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
