import React, { useState } from 'react'
import "./Home.css"
import imgadd from "./button.png"

function Home() {
  


  return (
    <div>
      <div class="todo-container ">
        <div class="to-do-title">
          ToDo App
        </div>



        <div>
          <input 
          type='text' 
          placeholder='Add a new task' 
          className='p-2 m-3 w-75 input' 
          value={newtask}
          onChange={(e)=>{
            setNewtask(e.target.value)
          }}
          />

          <img 
          src={imgadd} 
          height={40} 
          className='add-btn' 
          alt='add' 
          onClick={addTask}
          />
        </div>

        <div className='d-flex flex-column align-items-center overflow-y-scroll h-75 '>
          {
            tasks.map((task, i) => {
              return (
               <p key={i} className='border border-2 border-info text-center w-75 rounded-pill fw-normal  fs-4'>
                 <h4>
                  {task}
                </h4>
               </p>
                )
            })
          }
        </div>

      </div>


    </div>
  )
}

export default Home