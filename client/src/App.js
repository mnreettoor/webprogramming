import React, { Component, useState } from 'react';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import {Login} from './Pages/Login'
import Profile from './Pages/Profile'
import {StudentRegistration} from './Pages/StudentRegistration'
import AddCourses from './Pages/AddCourses'
import MyCourses from './Pages/MyCourses'
import Header from './Components/Header'
import listOfStudents from "./JSON/mycourses.json"
import './App.css'

const  App = () =>{
  const [studentsList, setStudentsList] = useState(listOfStudents)
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" index element={<Login studentsList={studentsList} setStudentsList={setStudentsList}/>}/>
          <Route path="/student-registration" element={<StudentRegistration studentsList={studentsList} setStudentsList={setStudentsList}/>}/>          <Route path="/student-registration" element={<StudentRegistration studentsList={studentsList} setStudentsList={setStudentsList}/>}/>
          <Route path="/profile" element={<Profile studentsList={studentsList} setStudentsList={setStudentsList}/>}/>
          <Route path="/my-courses" element={<MyCourses studentsList={studentsList} setStudentsList={setStudentsList}/>}/>
          <Route path="/add-courses" element={<AddCourses studentsList={studentsList} setStudentsList={setStudentsList}/>}/>
        </Routes>
      </Router>
    );
  }


export default App;