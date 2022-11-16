// React and Libraries
import React from "react";
import Axios from "axios"

// React Hooks
import {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";

// Bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Login = (props) => {
    
    const navigate = useNavigate();
    
    const studentsList = props.studentsList
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3005/api/studentinfo', {
            Email: email,
            Password: password
        }).then((res) => {
            if(res.data != '') {
                console.log("User authenticated");
                console.log(res.data);
                navigate("../Profile", {state: {email}});
            } else {
                console.log("This user does not exist in our DB")
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        console.log("Email and/or password changed")
        
        const btnSubmit = document.getElementById("buttonSubmit")
        btnSubmit.addEventListener("click", handleSubmit)

        return () => {
            btnSubmit.removeEventListener("click", handleSubmit)
        }
        
    }, [email, password])


    return(
        <div className="auth-form-container">
                <h2>Login</h2>
            <Form style={{width:"80%", border:"1px solid #E5E7E9", padding: "20px", margin: "auto"}}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
                </Form.Group>

                <Button variant="primary" type="submit" id="buttonSubmit">Register</Button>
                <br></br>
                <Form.Text className="text-primary">
                <Link to="./student-registration" style={{textDecoration:'none'}}>Don't have an account? Register here.</Link>
                </Form.Text>
            </Form>
            


       </div>
    )
}