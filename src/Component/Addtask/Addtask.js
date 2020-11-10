import React,{useState} from 'react'
import { Button ,InputGroup,FormControl, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import{addTask, FiltreDone, FiltreUnDone}from '../../js/Action/action'
import './Addtask.css'
function Addtask() {
    const [Input, setInput] = useState('')
    const dispatch = useDispatch() 
    const Add =(e) => {
        
        if(Input) {e.preventDefault() 
            dispatch(addTask({text:Input,id:Math.random(),Done:false}));
    setInput('')} else{ alert('gaith')}}
    return (
        <div className='header' >
          <h1 className='title'>ToDo Application</h1>
        <Form className='input' onSubmit={Add}>

           <InputGroup  className="mb-3" >
    <FormControl 
      placeholder="Task"
      aria-label=" Task"
      aria-describedby="basic-addon2"
      onChange={(e)=>setInput(e.target.value)} 
      value={Input}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={Add} >Add</Button>
      </InputGroup.Append>
      
  </InputGroup>
  </Form>
  <InputGroup.Append className='filtre'>
      <Button variant="outline-secondary" onClick={()=>dispatch(FiltreDone())} >Done</Button>
      <Button variant="outline-secondary" onClick={()=>dispatch(FiltreUnDone())}  >UnDone</Button>
      </InputGroup.Append>
        </div>
    )
}

export default Addtask
