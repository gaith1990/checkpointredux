import React from 'react'
import {useSelector} from 'react-redux';
import { Button ,InputGroup} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {deleteTask ,doneTask} from '../../js/Action/action';
import EditTask from '../../Component/edittask/edittask';
import './ListTask.css'



function ListTask() {
    const dispatch = useDispatch() 
    const Tasks = useSelector((state) => state.listtasks)
    return (
        <div>
           {Tasks.map((task,key)=>(
               <div className='body' key={key}>
                  <div >
              <h1 className='task'>{task.text}</h1> 
              </div>
              <div className='buttons'>
              <InputGroup.Append>
      
      <EditTask task={task}/>
    </InputGroup.Append>
    <InputGroup.Append>
      <Button className='bdelet' variant="outline-secondary" onClick={()=>dispatch(deleteTask(task.id))} >Delete</Button>
    </InputGroup.Append>
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={()=>dispatch(doneTask(task.id))} >{task.Done?'IsDone':'Undone'}</Button>
    </InputGroup.Append>
    </div>
    </div>))}
    </div>
     )
}

export default ListTask
