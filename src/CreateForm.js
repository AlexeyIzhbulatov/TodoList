import React, {useState} from 'react';
import './App.css';

function CreateForm(props) {
  const [task, setTask] = useState('')

  const addTask = () => {
    props.onCreateTask(task)
    setTask('')
  }

  return (
    <div className="createForm">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Task</label>
          <input type="text" className="form-control" value={task} onChange={e => setTask(e.target.value)}/>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={addTask}>Cancel</button>
        </div>
      </form>

    </div>
  );
}

export default CreateForm;
