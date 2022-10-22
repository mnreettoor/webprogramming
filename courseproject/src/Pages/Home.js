import React, {useState} from 'react'

// Abdul
function App (){
    const [usernameReg, setUsenameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
  
    return(
        <div>
            <h1>Registartion</h1>
            <label>Full Name</label>
            <input type="text" />
            <label>Email Address</label>
            <input type="text" />
            <label>Username</label>
            <input type="text" onChange={(e) =>{
                setUsernameReg(e.target.value);
            }} />
            <label>Password</label>
            <input type="text" onChange={(e) =>{
                setPasswordReg(e.target.value);
            }}/>
            <label>Confirm Password</label>
            <input type="text" />
            <button>Register</button>
        </div>
    );
}

export default Home

/*const Home = ()=>{

    return(
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home*/