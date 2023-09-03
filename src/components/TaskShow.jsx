import React, { useState } from 'react'
import TaskCreate from './TaskCreate'

const TaskShow = ({task,onDelete,onUpdate}) => {
   
const [showTask,setShowTask]=useState(false)
    const handleClick =()=>{
    onDelete(task.id)
    }

    const handleEditTask =()=>{
setShowTask(!showTask)

    }
  

        const handleSubmit =(id,updatedTitle,updatedTaskDesc)=>{
setShowTask(false)
onUpdate(id,updatedTitle,updatedTaskDesc)
    }
  return (
    <div >


    {
      showTask?<>
      <TaskCreate task1={task} taskForEdit={true} onUpdate={handleSubmit}/>
      
      
      </> :  
       <div className='task-show'>
      <h3>Vezife</h3>
  <p>{task.title}</p>
  <h3>Edilecekler</h3>
  <p>{task.taskDesc}</p>
  <div>
  
      <button className='sil' onClick={handleClick}>Sil</button>
      <button className='deyisdir' onClick={handleEditTask}>Deyisdir</button>
  </div>
      </div>
    }

  

    </div>
  )
}

export default TaskShow