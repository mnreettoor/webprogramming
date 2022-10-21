import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import StudentRegistration from './Pages/StudentRegistration'
import AddCourses from './Pages/AddCourses'
import MyCourses from './Pages/MyCourses'
import Header from './Components/Header'
import "./stylesProfile.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/student-registration" element={<StudentRegistration/>}/>
          <Route path="/add-courses" element={<AddCourses/>}/>
          <Route path="/my-courses" element={<MyCourses/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
