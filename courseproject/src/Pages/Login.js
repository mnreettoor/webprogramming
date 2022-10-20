import React from 'react'
// Abdul

function App (){
    const [usernameReg, setUsenameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    return(
        <div>
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" placeholder='Username...' />
            <input type="text" placeholder='Password...' />
            <button>Login</button>
        </div>
    );
}
export default Login



/*const Login = ()=>{

    return(
        <>
        <h1>Login</h1>
        </>
    )
}
export default Login*/