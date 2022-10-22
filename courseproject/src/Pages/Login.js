import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

// Abdul
export const Login = (props) => {
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const handleSubmit = (e) =>{

        e.preventDefault();
        console.log(email + " " + password)
        console.log(students.some(e => e.email == email))
        console.log(students.some(e => e.password == password))
        console.log(students.includes(password))
        if(students.some(e => e.email == email) && students.some(e => e.password == password)) {
            navigate("../Profile");
        } else {
            alert("The user and password are not in our database")
        }
    }

    const students = [
        {email: "abc@gmail.com",
        password: 123456},
        {email: "zaz@hotmail.com",
        password: 123456},
        {email: "sample",
        password: "sample"}
    ]

    return(
        <div className="auth-form-container">
                <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlfor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            
        
       </div>
    )
}