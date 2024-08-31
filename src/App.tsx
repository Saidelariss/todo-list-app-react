import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


function App() {
  // const initialTasks : string[] = ["task 1","task 2"]
  const [tasks,setTasks] = useState<string[]>([]);
  const [inputValue,seInputValue] = useState("");
  const [editTaskValue,setEditTaskValue] = useState("");
  const [taskEdit,setTaskEdit] = useState(false)
  const [currentEditedTask,setCurrentEditedTask] = useState("")
  

  function handleAddTask(){
    setTasks([...tasks,inputValue]);
    seInputValue("")
  }

  function handleDeleteTask(task:string){
    const newTasks = tasks.filter(t=>t !== task)
    setTasks(newTasks);

  }

  function handleEditTask(task:string,newTaskValue:string){
    console.log(`Updating task: ${task} with new value: ${newTaskValue}`);
    const newTasks = tasks.map(t=>{
      if (t===task) return newTaskValue;
      else return t;
    })

    setTasks(newTasks)
    setTaskEdit(false)
    setEditTaskValue("")
    
  }
  return (
  <div className='card'>
    <h1>Get Things Done</h1>
    <div>
    <input value={inputValue} onChange={(e)=> seInputValue(e.target.value)} type="text" placeholder='what is the task today?'/>
    <button onClick={handleAddTask}>Add Task</button>
    </div>
    
    {
      tasks.map(task =>
        <>{taskEdit && currentEditedTask === task && <div>
          <input value={editTaskValue} onChange={(e)=> setEditTaskValue(e.target.value)} type="text" placeholder='what is the task today?'/>
          <button onClick={()=>handleEditTask(task,editTaskValue)}>Add Task</button>
          </div>}
        
      <div className='taskContainer'><div className='task'>
        {task}
        </div>
        <FontAwesomeIcon onClick={()=>{setTaskEdit(true);setCurrentEditedTask(task)}} icon={faEdit} className='editButton' size='xl'></FontAwesomeIcon>
        <FontAwesomeIcon  onClick={()=>handleDeleteTask(task)} icon={faTrashCan} className='trashButton' size='xl'/>
        </div>
        </>)
    }
  </div>
  )
}

export default App
