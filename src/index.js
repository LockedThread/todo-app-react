import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//TODO: Switch to function based components

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <div className="big-box border">
          <text className="app-name-header">Todo App</text>
          <hr className="line"/>
          <div>
            
          </div>
          <TodoList/>
        </div>
      </div>
    );
  }
}

class TodoAddItem extends React.Component { 
  
  constructor(props) {
    super(props);
  }

  render() {
    <form onSubmit={this} >
      <label>
        Todo Item:
        <input type="text"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  }
}

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    if (this.props.list != null) {
      return (
        this.props.list.map(item => TodoItem(item.name))
      );
    } else {
      return(
        <div></div>
      )
    }
  }
}

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
