import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
  const [todos, addTodo] = useState([]);

  const [todoValue, setTodoValue] = useState("");

  const submitForm = (event) => {
    event.preventDefault()
    if (todoValue.length > 0) {
      addTodo(todos=> [...todos, Todo(todoValue)])
      setTodoValue("")
    }
  }

  const Todo = (value) => {
    return {
      value: value,
      time: new Date().getTime(),
    }
  };

  const TodoList = () => {
    return (todos.map((todo) =>
      <div key={todo.time} className="todo-item">
        <div className="todo-text">{todo.value}</div>
      </div>
      )
    );
  }

  return (
    <div className="container">
      <div className="big-box border">
        <text className="app-name-header">Todo App</text>
        <hr className="line"/>
        <div>
          <form onSubmit={submitForm}>
            <label>
              New Todo:
              <input type="text" value={todoValue} onChange={(event) => setTodoValue(event.target.value)}></input>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <hr className="line"/>
        <div>
          <TodoList className="todo-list"/>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
