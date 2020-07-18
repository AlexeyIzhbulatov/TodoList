import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import TodoList from "./TodoList";
import CreateForm from "./CreateForm";


const initialTodos = [
    {id: uuidv4(), name: 'Test1', done: false},
    {id: uuidv4(), name: 'Test2', done: false},
]

function App() {

    const [todos, setTodos] = useState(initialTodos)

    const onCreateTask = (task) => {
        console.log(task + 'App')
        const updateOnCreateTask = [...todos];
        updateOnCreateTask.push({id: uuidv4(), name: task, done: false})
        setTodos(updateOnCreateTask)
    }

    const onDeleteTask = (id) => {
        const updateDeleteTask = (el => {
            if(el.id === id) return {...el, el.id !== id}
            else return el;
        })
        setTodos(updateDeleteTask)
    }

    return (
        <div className="App">
            <TodoList todos={todos} onDeleteTask={onDeleteTask}/>
            <CreateForm onCreateTask={onCreateTask}/>
        </div>
    );
}

export default App;

return (
    <div className="App">
        <TodoList todos={todos} onDeleteTask={onDeleteTask}/>
        <CreateForm onCreateTask={onCreateTask}/>
    </div>
);
}

export default App;
