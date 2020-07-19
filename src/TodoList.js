import React from 'react';
import './App.css';


function TodoList(props) {

    const done = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </svg>)

    const unDone = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
    </svg>)


    return (
        <div className="todoList">
            {
                props.todos.map(el => <li key={el.id}>{el.name}
                    {el.done ? <span>{done}</span> : <span>{unDone}</span>}
                    <button type="button" className="btn btn-success" onClick={() => props.onDoneTask(el.id)}>{el.done ? 'Done' : 'unDone'}</button>
                    <button type="button" className="btn btn-danger" onClick={() => props.onDeleteTask(el.id)}>Delete</button>
                </li>)
            }
        </div>

    );
}

export default TodoList;
