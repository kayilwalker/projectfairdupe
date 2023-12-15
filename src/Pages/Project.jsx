import React from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import cardimg from '../Images/Screenshot 2023-11-22 121701.png'

import { Row,Col } from 'react-bootstrap';
import Pojecttsss from '../components/Pojecttsss';

function Project() {
  return (
    <div><Header/>
    <div  style={{marginTop:'50px'}}>
    <center><h1>All Project</h1></center>
    <center>
    <InputGroup  className="mb-3 w-50 mt-5">
        <Form.Control
          placeholder="Search the project using technoligies"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button id="button-addon2">
        <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup></center>

      
    </div>
    
<Row className='mt-5 container-fluid'>
    <Col sm={12} md={6} lg={4}>
      <Pojecttsss/>
    </Col>
</Row>

    </div>
  )
}

export default Project