// React Hooks
import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'; 

// React Icons
import {Image, Button, Card} from 'react-bootstrap'
import { MdPerson } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdPermDeviceInformation } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import studentsJSON from "../JSON/mycourses.json"

// Components
import mypic from '../Images/profilePic4.jpg'
import MyCourses from './MyCourses';
import AddCourses from './AddCourses';

// Other libraries
import Axios from 'axios'




const Profile = () => {
    
    const location = useLocation(); 
    const studentEmail = location.state.email
    //const studentInfo = studentsList.find((student)=>student.email == studentEmail)
    const [student, setStudent] = useState(studentEmail)    
    
    
    useEffect(() => {
        Axios.get(`http://localhost:3005/api/student/${studentEmail}`)
        .then((res) => {
            setStudent(res.data[0])
            console.log(res.data[0])
        })
    }, [])



    
    // const [displayMyCourses, setDisplayMyCourses] = useState(true);
    // const [displayAddCourses, setDisplayAddCourses] = useState(true);

    // const handleShowMyCourses = event => {
    //     setDisplayMyCourses(visible => !visible);
    // };
    // const handleShowAddCourses = event => {
    //     setDisplayAddCourses(visible => !visible);
    // };

    return (
        <div className='profile'>
            <h1 className='profileTitle'>Profile</h1>
            <div className='profileCard'>
                <Card style={{ width: '17rem' }} border='light'>

                    <Image className="image-center" roundedCircle="false" src={mypic} width="100%" />
                    {/* <div className='infoCourses'>
                        <div>
                            <Card.Title className='text-center ' size=''> {student.courses.length}</Card.Title>
                            <Card.Text className='text-center'>Courses</Card.Text>
                        </div>
                        <div>
                            <Card.Title className='text-center '>2</Card.Title>
                            <Card.Text className='text-center'>Term</Card.Text>
                        </div>

                    </div> */}

                    {/* <div className='btn-profile'>
                        <Button variant="light" size="s" onClick={handleShowAddCourses}> <MdLibraryAdd /> Add Courses</Button>{' '}
                        <Button variant="light" size="l" onClick={handleShowMyCourses}>My Courses</Button>{' '}
                    </div> */}

                    <Card.Body className='cardBody'>
                        <Card.Title ><MdPerson />Student Name:</Card.Title>
                        <Card.Text className='text-center '>
                            {student.firstName} {student.lastName}
                        </Card.Text>
                        <Card.Title ><MdPermDeviceInformation />Student ID:</Card.Title>
                        <Card.Text className='text-center '>
                            {student.studentId}
                        </Card.Text>
                        <Card.Title ><MdAlternateEmail />Email:</Card.Title>
                        <Card.Text className='text-center '>
                            {student.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* <div className='myCoursesProfile myCourses'>
                {displayMyCourses && (
                        <div>
                            <h2>My Courses</h2>
                            <MyCourses id={student.studentId} student={student} setStudent={setStudent} />
                        </div>
                    )}
                </div>
                <div className='myCoursesProfile'>
                {displayAddCourses && (
                    
                        <div>
                            <h2>Add Courses</h2>
                            <AddCourses id={student.studentId} student={student} setStudent={setStudent}  />
                        </div>
                    )}
                </div> */}

            </div>

        </div>
    )
}
export default Profile