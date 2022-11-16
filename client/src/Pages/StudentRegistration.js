// React and Libraries
import React from "react";
import Axios from "axios"
import cors from 'cors'

// React Hooks
import {useState} from "react";
import { useNavigate } from "react-router-dom";

// Bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Components
import mycourses from '../JSON/mycourses.json';


export const StudentRegistration = (props) => {
    const navigate = useNavigate();
    
    // Props
    const studentsList = props.studentsList;
    const setStudentsList = props.setStudentsList;

    // Form parameters
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello from Submit button")
        Axios.post('http://localhost:3005/api/newstudent', {
            FirstName: firstName,
            LastName: lastName,
            DateOfBirth: dateOfBirth,
            Email: email,
            Password: password
        }).then(() => {
            console.log("New Student added to the DB")
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <Form style={{width:"80%", border:"1px solid #E5E7E9", padding: "20px", margin: "auto"}}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" id="fname" name="fname"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="First Name" id="lname" name="lname"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="text" placeholder="YYYY-MM-DD" id="dob" name="dob"/>
                </Form.Group>
            
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Register
                </Button>
            </Form>
        </div>

    )
}