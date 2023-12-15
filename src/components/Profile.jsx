import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <div className='card shadow p-5'>
    <div className='d-flex justify-content-between align-item-center'>
        <h2>Profile  </h2>
        <button       onClick={() => setOpen(!open)} className='btn btn-success'><i class="fa-solid fa-down-long fa-2x"></i></button>

    </div>
    <Collapse in={open}>
    <div className='row justify-content-center'>
        <label htmlFor="profiles" className='text-center'>
        <input id="profiles" type="file" style={{display:'none'}} />
        <img width={'200px'} height={'200px'} src="https://freepngimg.com/thumb/man/22654-6-man.png" className='rounded-circle justify-content-center' alt="" />
        </label>
        <div  className='mb-3 mt-4'>
<input type="text" placeholder='GitHub' className='form-control' />

        </div>
        <div  className='mb-3 mt-4'>
<input type="text" placeholder='LinkedIn' className='form-control' />

        </div>
        <div  className='mb-3 mt-3'>
   <button className='btn btn-success rounded w-100'>Update</button>
        </div>
        </div>
        </Collapse>
    </div>
  )
}

export default Profile