import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddProjectAPI } from '../services/allApi';

function AddProject() {
//to hold the value of image url
const [preview,setPreview] = useState("")


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [addprojects,setaddprojects] = useState({
      Title:"",
      Language:"",
      GitHub:"",
      Website:"",
      Overview:"",
      projectimage:""
    })
console.log(addprojects);

const handleClose1 = ()=>{
  setaddprojects({
    Title:"",
      Language:"",
      GitHub:"",
      Website:"",
      Overview:"",
      projectimage:""
  })

  setPreview("")
}
const[token,setToken] = useState("")
useEffect(()=>{
  if(addprojects.projectimage){
    (setPreview(URL.createObjectURL(addprojects.projectimage)))
  }
},[addprojects.projectimage])


useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }
  else{
    setToken("")
  }
})

console.log(preview);



//add project
const handleAdd = async(e)=>{
  e.preventDrfault()
   
  const {Title,Language,GitHub,Website,Overview,projectimage} = addprojects

  if(!Title || !Language || !GitHub || !Website || !Overview || !projectimage){
    alert('please fill the form compltely')
  }
  else{
    //reqBody 
    //1)create object for formData - sice we have uploaded
    const reqBody = new FormData()
    // 2)add data to formData - append() 
    reqBody.append("title",Title)
    reqBody.append("Language",Language)
    reqBody.append("GitHub",GitHub)
    reqBody.append("Overview",Overview)
    reqBody.append("projectimage",projectimage)


    if(token){ 
      const reqHeader = {
         "Content-Type":"multipart/form-data",
         "Authorization": `Bearer ${token}`
      }

   
    const result = await AddProjectAPI(reqBody,reqHeader)
    console.log(result);
  }
  }

}

  return (
    <div> <Button className='btn btn-success' variant="primary" onClick={handleShow}>
    Add Project
  </Button>

  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    size='lg'
  >
    <Modal.Header closeButton>
      <Modal.Title>Project Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Row>
     <Col md={6}><label htmlFor="image"  className='text-center'> <input id='image' type='file' style={{display:'none'}} onChange={(e)=>setaddprojects({...AddProject,projectimage:e.target.files[0]})} />
     
     <img className='ms-5' width={'100%'} src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcMke1EQEkY1MeRItl9XiRPzj-hZxruypTg&usqp=CAU" }alt="" />
     
     
     </label>
     
     
     
     </Col>
     <Col md={6}  className='d-flex justify-content-center align-items-center flex-column'>
     
     <div className='mb-3 w-100'>
        <input type="text" className='form-control' placeholder='Project Title' value={addprojects.Title} onChange={(e)=>setaddprojects({...addprojects,Title:e.target.value})}/>

     </div>
     <div className='mb-3 w-100'>
        <input type="text" className='form-control' placeholder='Project Language' value={addprojects. Language} onChange={(e)=>setaddprojects({...addprojects, Language:e.target.value})} />

     </div>
     <div className='mb-3 w-100'>
        <input type="text" className='form-control' placeholder='Project GitHub Link' value={addprojects. GitHub} onChange={(e)=>setaddprojects({...addprojects, GitHub:e.target.value})} />

     </div>
     <div className='mb-3 w-100'>
        <input type="text" className='form-control' placeholder='Project Website Link' value={addprojects. Website} onChange={(e)=>setaddprojects({...addprojects, Website:e.target.value})} />

     </div>
     <div className='mb-3 w-100'>
        <input type="text" className='form-control' placeholder='Project Overview' value={addprojects.Overview} onChange={(e)=>setaddprojects({...addprojects,Overview:e.target.value})} />

     </div>
     
     
     </Col>

     </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose1}>
        Clear
      </Button>
      <Button  variant="primary">Add</Button>
    </Modal.Footer>
  </Modal>
  </div>
  )
}

export default AddProject