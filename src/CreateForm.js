import React, {useState} from 'react';
import './App.css';

function CreateForm(props) {

  const [task, setTask] = useState('')


  const addTask = () => {
    props.onCreateTask(task)
    setTask('')
  }


  return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" value={task} onChange={e => setTask(e.target.value)}/>
          </div>
          <button type="button" className="btn btn-primary" onClick={addTask} disabled={task.trim() === ''}>Add</button>
        </form>
    </div>
  );
}

export default CreateForm;
