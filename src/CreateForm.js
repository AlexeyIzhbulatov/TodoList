import React, {useState} from 'react';
import './App.css';

function CreateForm(props) {
 const [task, setTask] = useState('')

  const addTask = () => {
   console.log(task + 'Form')
    props.onCreateTask(task);
   setTask('')
  }

  return (
      <div>
          <input className="form-control" type="text" placeholder="What do you mean ?"  value={task} onChange={e => setTask(e.target.value)}/>
            <button type="submit" className="btn btn-primary" onClick={addTask} disabled={task.trim() === ''}>Add</button>
    </div>
  );
}

export default CreateForm;
