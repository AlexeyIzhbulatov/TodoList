import React, {useState} from 'react';
import './App.css';

function CreateForm(props) {
  const [task, setTask] = useState('')

  const onChangeTask = () => {
    console.log(task)
    props.onChangeTask(task)
    setTask('')
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Task</label>
          <input type="text" className="form-control" value={task} onChange={onChangeTask}/>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
