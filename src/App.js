import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {

  //todo state
  const [toDo, setToDo] = useState([
    {"id":1, "title":"Task 1", "status":false},
    {"id":2, "title":"Task 2", "status":false},
  ])

  //temp state
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

 //add task
 const addTask = ()=> {

 }
 
 //delete task
 const deleteTask = (id) => {

 }

 //mark task as completed
 const markDone = (id) => {

 }

 //cancel update
 const cancelUpdate = () => {

 }

 //change task for update
 const changeTask = (e) => {

 }

 //update task 
  const updateTask = (e) => {

  }


  return (
    <div className="container App">
    <br /> <br />
     <h2>To Do List App (ReactJS)</h2>
     <br /> <br />

     {/* display todos */}

     {toDo && toDo.length ? '':'No Task...'}

     {toDo && toDo
        .sort((a,b) => a.id > b.id ? 1 : -1)
        .map( (task, index)=> {
          return(
           < React.Fragment key={task.id}>

            <div className='col taskBg'>
              <div className={task.status ? 'done': '' }  >
                <span className='taskNumber' >{index + 1}</span>
                <span className='taskText'>{task.title}</span>
              </div>

              <div className='iconsWrap'>
                <span title='Completed/Not Completed'>
                  <FontAwesomeIcon icon = {faCircleCheck} />
                </span>
                <span title='Edit'>
                <FontAwesomeIcon icon = {faPen} />
                </span>
                <span title='Delete'>
                <FontAwesomeIcon icon = {faTrashCan} />
                </span>
              </div>
            </div>
           
           </React.Fragment>
          )
        })}
    </div>
  );
}

export default App;
