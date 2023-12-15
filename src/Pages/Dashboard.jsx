import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row,Col } from 'react-bootstrap'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'

function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem("existUser")).username)
  },[])
  return (

  <div> 
  <Header Dashboard/>
  <h3 className='mt-5 ms-3'>Welcome <span className='text-warning'>{username} </span></h3>
  <Row className="container-fluid mt-5" style={{}} >
 <Col  md={8}> 
 
 <MyProject/>
 
 </Col>

 <Col  md={4}> 
 
 <Profile/>
 
 
 </Col>
  </Row>
  
  </div>
 
  )
}

export default Dashboard