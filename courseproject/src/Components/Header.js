import React from 'react'
//import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/logo.png'
import { AiOutlineHome } from 'react-icons/ai';
import {BiUserPlus} from 'react-icons/bi';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import {BsBook} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import {RiLoginBoxFill} from 'react-icons/ri'

// Dario
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{padding: 0}}>
        
        <Container>
          <Navbar.Brand href="/"><img src={Logo} width="120px" style={{verticalAlign: "middle"}} alt="Logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"><AiOutlineHome style={{verticalAlign: "middle"}}/> Home</Nav.Link>
              <Nav.Link href="/student-registration"><BiUserPlus/> Student Registration</Nav.Link>
              <Nav.Link href="/add-courses"><AiOutlineAppstoreAdd/> Add Courses</Nav.Link>
              <Nav.Link href="/my-courses"><BsBook/> My Courses</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/profile"><FaUser/> Profile</Nav.Link>
            <Nav.Link href="/login"><RiLoginBoxFill/> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;