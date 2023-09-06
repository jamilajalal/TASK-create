

import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'
function App() {
  const [tasks,setTasks]=useState([])
const create =async(title,taskDesc)=>{
 const response= await axios.post("http://localhost:3000/tasks",{
    title,
    taskDesc
  })
  console.log(response)
const CreatedTask=[
  ...tasks,
  response.data
]
setTasks(CreatedTask)
}
 const  fetchApi=async()=> {
  const response = await axios.get("http://localhost:3000/tasks");
  setTasks(response.data)
 }

useEffect(()=>{
  fetchApi()
},[])




 const handDelete=async(id)=>{
 await axios.delete(`http://localhost:3000/tasks/${id}`);
 const afterDelete= tasks.filter((task)=>{
    return task.id!==id
  })
  setTasks(afterDelete)
 }

 const editTaskById=async(id,updatedTitle,updatedTaskDesc)=>{
  await axios.put(`http://localhost:3000/tasks/${id}`,{
    title:updatedTitle,
    taskDesc:updatedTaskDesc,
  });
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
