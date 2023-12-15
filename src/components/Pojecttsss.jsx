import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import cardimg from '../Images/Screenshot 2023-11-22 121701.png'
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';

function Pojecttsss() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Card  onClick={handleShow} style={{ width: '28rem' }}>
      <Card.Img style={{height:'250px'}}  variant="top" src={cardimg} />
      <Card.Body>
        <Card.Title>Vedio Player</Card.Title>
        
      </Card.Body>
    </Card>
    
  
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Col md={6}>
                <img src={cardimg} width={'100%'} alt="" />
            </Col>
            <Col md={6}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nisi eveniet aut officiis explicabo non, perferendis dolor maiores corporis ab assumenda sed porro cum quis rem vitae sit harum nemo!</p>
                <p><span className='fw-bolder'>Technoligies</span>: HTML,CSS,React</p>
                </Col>
        </Row>
        <div className='d-flex'>
            <a style={{color:'grey'}} href="" target='_blank'><i class='fa-brands fa-github fa-2x ms-5'></i></a>
            <a style={{color:'grey'}} href="" target='_blank' ><i class='fa-brands fa-link fa-2x ms-5'></i></a>
        </div>
        </Modal.Body>
      
      </Modal>
    </div>
  )
}

export default Pojecttsss