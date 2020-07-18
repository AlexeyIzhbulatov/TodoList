import React from 'react';
import './App.css';
import CreateForm from "./CreateForm";


function TodoList(props) {


    return (
        <div className="todoList">
            {
                props.todos.map(el => <li key={el.id}>{el.name}
                    <button type="button" className="btn btn-danger" onClick={() => props.onDeleteTask(el.id)}>Delete</button>
                </li>)
            }
        </div>

    );
}

export default TodoList;

return (
    <div className="App">
        <TodoList todos={todos} onDeleteTask={onDeleteTask}/>
        <CreateForm onCreateTask={onCreateTask}/>
    </div>
);
}

export default App;
