import React, {useState} from "react";


export const StudentRegistration = (props) => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[date, setDob] = useState('');
    const[conp, setConp] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
                <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="full Name" id="name" name="name" />
                <label htmlFor="date">Date Of Birth</label>
                <input value={date} onChange={(e) => setDob(e.target.value)} type="text" placeholder="YYY-MM-DD" id="date" name="date" />
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlfor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
                <label htmlfor="password">Confirm Password</label>
                <input value={conp} onChange={(e) => setConp(e.target.value)} type="password" placeholder="***********" id="conp" name="conp" />
                <button type="submit" onClick={() => props.onFormSwitch('login')}>Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>

    )
}