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

  const onChangeTask = (task) => {
    console.log(task)
  }

  return (
    <div className="App">
<TodoList todos={todos}/>
<CreateForm onChangeTask={onChangeTask}/>
    </div>
  );
}

export default App;
