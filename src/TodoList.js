import React from 'react';
import './App.css';
import CreateForm from "./CreateForm";


function TodoList(props) {
  const done = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
  </svg>)

  return (
    <div className="todoList">
      {props.todos.map(el => <li key={el.id}>{el.name}
        {el.done ? <span>{done}</span> : 'X'}
        <button onClick={() => props.onDoneTask(el.id)}>{el.done ? 'unDone' : 'Done'}</button>
      <button onClick={() => props.onDeleteTask(el.id)}>Delete</button>
      </li>)}
    </div>

  );
}

export default TodoList;
