import React, { useEffect, useState } from 'react'
import {Row, Col } from 'react-bootstrap'
import titleimage from '../Images/0f7a8787346a1c97faea82156fb82530 (1).gif'

import { Link } from 'react-router-dom'
import Pojecttsss from '../components/Pojecttsss'


function Home() {
  const [islogin,setIslogin] = useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIslogin(true)
    }
  },[])
  console.log(islogin);
  return (
    <div style={{width:'100%',backgroundColor:'#0ee37f'}}>
      <div className='container-fluid rounded'>

<Row className='align-items-center p-5 '>
  <Col sm={12} md={6}>
   <h1 style={{fontSize:'90px',color:'white'}}>Project Fair</h1>
   <p>One stop destination for all software development projects</p>
 { islogin? 
 <Link to={'/dashboard'} className='btn btn-dark rounded'>Manage Project <i class="fa-solid fa-arrow-right ms-3"></i></Link>:
   <Link to={'/login'} className='btn btn-dark rounded'>Get Started <i class="fa-solid fa-arrow-right ms-3"></i></Link>}
  </Col>
  <Col sm={12} md={6}>
   <img src={titleimage} className='w-75' alt="no" />
  </Col>
</Row></div>

<div className='all-projects mt-5'>
  <h1 className='text-center mt-5'>Expolre our Projects</h1>
  <marquee scrollAmount = {30} className='mt-5'>
  <div className='d-flex justify-content-evenly'>
    <div className='ms-5'  style={{width:'500px'}}>
<Pojecttsss/>

    </div>
    <div className='ms-5' style={{width:'500px'}}>
    <Pojecttsss/>

    </div>
    <div className='ms-5' style={{width:'500px'}}>
    <Pojecttsss/>

    </div>
  
  </div>
  </marquee>
  <div className='text-center mt-5'>
    <Link style={{color:'black'}}  to={'/project'}>See more project</Link>
  </div>
</div>

    </div>
  )
}

export default Home