import React from 'react'
import { Link } from "react-router-dom";
// Dario
const Header = () => {
    return (
        <div>
            <div><Link to='/'>Home</Link></div>            
            <div><Link to='/login'>Login</Link></div>
            <div><Link to='/profile'>Profile</Link></div>
            <div><Link to='/student-registration'>Student Registration</Link></div>
            <div><Link to='/add-courses'>Add Courses</Link></div>
            <div><Link to='/my-courses'>My Courses</Link></div>
        </div>
    )
}

export default Header;