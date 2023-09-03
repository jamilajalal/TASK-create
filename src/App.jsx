

import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
function App() {
  const [tasks,setTasks]=useState([])
const create =(title,taskDesc)=>{
const CreatedTask=[
  ...tasks,{
    id:Math.round(Math.random()*100),
    title,
    taskDesc
  }
]
setTasks(CreatedTask)
}
 const handDelete=(id)=>{
 const afterDelete= tasks.filter((task)=>{
    return task.id!==id
  })
  setTasks(afterDelete)
 }

 const editTaskById=(id,updatedTitle,updatedTaskDesc)=>{
  const updatedTask= tasks.map((task)=>{
    if(task.id===id){
      return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
    }
     return task
   })
   setTasks(updatedTask)
  }

  return (
 <div>
<TaskCreate onCreate={create}/>
<div className='h1'>
<h1>Vezifeler</h1>
</div>

<TaskList tasks={tasks} onDelete={handDelete} onUpdate={editTaskById}/>
 </div>
  )
}

export default App
