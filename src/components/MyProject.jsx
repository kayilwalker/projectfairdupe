import React from 'react'
import AddProject from './AddProject'

function MyProject() {
  return (
    <div className='card shadow p-5'>
        <div className='d-flex justify-content-between '>

            <h3> MyProject</h3>
           <AddProject/>
        </div>
        <div className='mt-4'>
            <div className='border align-item-center p-2 rounded d-flex'>
                <h5>Project Title</h5>
                <div className='ms-auto d-flex'>
                    <button className='btn' ><i class="fa-solid fa-pen-to-square text-info"></i> </button>
                    <button className='btn' > <i class="fa-brands fa-github text-success"></i></button>
                    <button className='btn' ><i class="fa-solid fa-trash text-danger"></i> </button>
                </div>
            
            </div>
            <p className='text-danger fw-bolder fs-4'> No Project upload yet !!</p>
             </div>
       </div>
  )
}

export default MyProject