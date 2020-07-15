import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";
import CreateForm from "./CreateForm";

const initialTodos = [
    {id: uuidv4(), name: 'Test1', done: false},
    {id: uuidv4(), name: 'Test2', done: false}
]

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const onCreateTask = (task) => {
        console.log(task + 'App')
        const updateOnCreateTask = [...todos];
        updateOnCreateTask.push({id:uuidv4(), name: task, done: false})
        setTodos(updateOnCreateTask)
    }


    const onDeleteTask = (id) => {
        const updateOnDeleteTask = todos.filter(el => el.id !== id)
        setTodos(updateOnDeleteTask)

    }

    const onDoneTask = (id) => {
     const updateDoneTask = todos.map(el => {
         if(el.id === id) return {...el, done : !el.done}
         else return el;
     });
     setTodos(updateDoneTask)
    }


  return (
    <div className="App">
<TodoList todos={todos} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask}/>
<CreateForm onCreateTask={onCreateTask}/>
    </div>
  );
}

export default App;
