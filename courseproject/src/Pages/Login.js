import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import students from "../JSON/students.json"
import {Link} from "react-router-dom";

// Abdul
const Login = ({setUser}) => {
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(students.some(e => e.email == email) && students.some(e => e.password == password)) {
            navigate("../Profile", {state:{email}});
        } else {
            alert("The user and password are not in our database")
        }
    }
   

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
            {/*<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>*/}
            
        
       </div>
    )
}

export default Login