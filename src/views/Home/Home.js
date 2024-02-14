import React from 'react'
import "./Home.css"
import imgadd from "./button.png"

function Home() {
  return (
    <div>
         <div class="todo-container">
        <div class="to-do-title">
            ToDo App
        </div>

        <div>
            <input type='text' placeholder='Add a new task' className='p-2 m-3 w-75'/>
           
            <img src={imgadd} height={40} className='add-btn' alt='add'/>
        </div>

        
    </div>


    </div>
  )
}

export default Home