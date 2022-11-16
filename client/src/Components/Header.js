// React Hooks
import React, {useState, useEffect} from 'react'

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Components
import Logo from '../Images/logo.png'
import { Login } from '../Pages/Login';

// React icons
import {BiUserPlus} from 'react-icons/bi';
import {RiLoginBoxFill} from 'react-icons/ri'
import {FaUser} from 'react-icons/fa'


const Header = () => {
    // const [Login, setLogin] = useState("Login")
    const [pathName, setPathName] = useState(window.location.pathname) 

    // useEffect(() => {
    //   console.log(pathName)
    //   if(pathName != '/') {
    //     setLogin("Logout")
    //   } else {
    //     setLogin("Login")
    //   }
    // }, [pathName])

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{padding: 0}}>
        
        <Container>
          <Navbar.Brand href="/"><img src={Logo} width="120px" style={{verticalAlign: "middle"}} alt="Logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/student-registration"><BiUserPlus/> Student Registration</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/Profile"><FaUser/> Profile</Nav.Link>
            <Nav.Link href="/"><RiLoginBoxFill/> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;