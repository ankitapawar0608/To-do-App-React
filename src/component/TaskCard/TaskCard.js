import React from 'react'



function TaskCard({task}) {
    return (
        <div>
            
            <div className=' mx-3'>
             <p 
         className='border border-2 border-info px-3 rounded-pill fw-normal  fs-4'>
            <h4>
                {task}
            </h4>
        </p>
        </div>
        </div>
    )
}

export default TaskCard