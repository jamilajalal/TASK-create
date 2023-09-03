import React, { useState } from 'react'

const TaskCreate = ({onCreate,task1,taskForEdit,onUpdate}) => {

    const[title,setTitle]=useState(task1 ? task1.title :"")
    const[taskDesc,setTaskDesc]=useState(task1 ? task1.taskDesc :"")

    const handleChange =(e)=>{
setTitle(e.target.value)
    }

     const handleTaskChange =(e)=>{
        setTaskDesc(e.target.value)
     }

     const handleSubmit =(event)=>{
event.preventDefault();
if(taskForEdit){
    onUpdate(task1.id,title,taskDesc)
}
else{
    onCreate(title,taskDesc);
}

setTitle("");
setTaskDesc("")}
  return (
    
<div>{taskForEdit ?  
 
 <div className='task-create task-show'>
<h1 style={{fontSize:'25px'}}>Task deyisdirin</h1>
<form onSubmit={handleSubmit} >
<h3>Basliq yenileyin</h3>
<input value={title} onChange={handleChange}/>
<h3>Taski yenileyin</h3>
<textarea value={taskDesc} onChange={handleTaskChange}/>




<div className='task-create-button'>
       <button >Deyisdir</button>
       </div>
</form>




    </div> :

       <div className='task-create elave '>
       <h1>Task Girin</h1>
       <form onSubmit={handleSubmit} >
       <h3>Basliq</h3>
       <input value={title} onChange={handleChange}/>
       <h3>Task Girin!</h3>
       <textarea value={taskDesc} onChange={handleTaskChange}/>
       
       <div className='task-create-button'>
       <button >YARAT</button>
       </div>
      
       
       
       </form>
       
       
       
       
           </div>
    
  
  }</div>
    
 
  )
}

export default TaskCreate