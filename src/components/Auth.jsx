import React, { useState } from 'react'
import { Container,Row,Col,Image,Form,Button } from 'react-bootstrap'
import { Link, json, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allApi'
import Swal from 'sweetalert2'

function Auth({register}) {
  //create a state to hold the value of user registration details
  const [userData,setUserData] = useState({
    username:"",
    email:"",
    password:""
  })
  
  const navigate = useNavigate()
    const RegisterForm=register?true:false
    console.log(userData);
    const handleRegister = async(e)=>{
      e.preventDefault()
      const {username,email,password} = userData
      if (!username || !email || !password) {
        Swal.fire({
          icon: 'error',
          title: 'Incomplete Form',
          text: 'Please fill out the form completely',
        });
      } else {
        const result = await registerAPI(userData);
        console.log(result.data);
        if (result.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: `${result.data.username} is successfully registered`,
          }).then(() => {
            setUserData({
              username: '',
              email: '',
              password: '',
            });
            // Navigate to login after the user acknowledges the success message
            navigate('/login');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: result.response.data,
          });
        }
      }}
      const handlelogin = async (e) => {
        e.preventDefault();
        const { email, password } = userData;
    
        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all details!'
            });
        } else {
            const result = await loginAPI(userData);
            console.log(result);
    
            if (result.status === 200) {
              //alert
                Swal.fire({
                  
                    icon: 'success',
                    title: 'Login Success!',
                    text: `${result.data.existUser.username} is Successfully Logined`
                })
                //store
                sessionStorage.setItem("existUser", JSON.stringify(result.data.existUser))
                sessionStorage.setItem("token", JSON.stringify(result.data.token))
                //state empty
                    setUserData({
                        username: "",
                        email: "",
                        password: ""
                    });
                    console.log(userData);
                    // navigate to login
                    navigate('/');
            
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.response.data}`
                });
            }
        }
    };
   

  return (
    <div >
       <Container fluid className="vh-100 d-flex align-items-center justify-content-center"> 
   
   <Row className="container bg-info" style={{}} >
   <Col md={6} className="d-flex align-items-center justify-content-center">
     <Image src="https://quicklaunch.io/wp-content/uploads/2019/10/user-registration.png" alt="Image" fluid />
   </Col>

   <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
     <h1>PROJECT FAIR</h1>
     <p className='text-light ms-5 mt-4'>{
        RegisterForm?'Sign Up to your Account':'Sign in to your Account'}</p>


     <Form className="mb-3 mt-3">
      { RegisterForm && <Form.Group controlId="formBasicEmail" className='mb-3'>
         <Form.Control type="text" placeholder="Enter Username" value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} />
       </Form.Group>}
       <Form.Group controlId="formBasicEmail" className='mb-3'>
         <Form.Control type="text" placeholder="Enter Email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
       </Form.Group>

       <Form.Group controlId="formBasicPassword" className='mb-3' value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}>
         <Form.Control type="password" placeholder="Password" />
       </Form.Group>
       </Form>
{RegisterForm?<div>
   <Button onClick={handleRegister} variant="primary" type="submit">
   Register
 </Button>
 <p className='text-light'>Already a User? Click here to <Link to={'/login'} style={{color:'blue'}}>Login</Link></p></div>:

<div>


       <Button onClick={handlelogin} variant="primary" type="submit">
         Login
       </Button>
    

     <p>New user? <Link to={'/register'} >Click here to register.</Link></p></div>}
   </Col>
 </Row>
</Container>
     </div>


    
  )
}

export default Auth