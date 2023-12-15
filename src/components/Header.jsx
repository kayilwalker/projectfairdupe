import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
function Header(Dashboard) {
  return (
    <div>  <Navbar style={{backgroundColor:'#32a852'}} >
    <Container>
      <Navbar.Brand >
        <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
        <i class="fa-solid fa-wand-magic-sparkles fa-2x me-3"></i>   Projec Fair
        </Link>
      </Navbar.Brand>
      {Dashboard && <button className='btn btn-warning'>Logout <i class="fa-solid fa-power-off"></i></button>

      }
    </Container>
  </Navbar></div>
  )
}

export default Header