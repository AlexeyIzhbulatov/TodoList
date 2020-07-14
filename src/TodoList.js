import React from 'react';
import './App.css';

function TodoList(props) {
  return (
    <div className="todoList">
      {props.todos.map(el => <li>{el.name}</li>)}
    </div>

  );
}

export default TodoList;
