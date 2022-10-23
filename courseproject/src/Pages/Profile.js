import React from 'react'
import { useState } from 'react'
import mypic from '../Images/profilePic3.jpg'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdPerson } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdPermDeviceInformation } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import studentsJSON from "../mycoursesDaniel.json"
import {useLocation} from 'react-router-dom';



// Daniel
const Profile = () => {
    const location = useLocation();
    console.log(location);

    let student = studentsJSON.find((student)=>student.studentId == 1003) //insted of 1001 we will pass props.id
    const [studentInfo, setStudentInfo]= useState({
        studentId:student.studentId ,
        firstName:student.Name, 
        lastName:student.LastName,
        email:student.email, 
        cousrse: student.courses
    })
  
   
    return (
        <div>
            <h1 className='profileTitle'>Profile</h1>

            

            {/* Student info  Card */}
            <div className='profileCard'>

                <Card   style={{ width: '20rem' }} border='light'>

                    <Image  className="image-center" roundedCircle="false" src={mypic} width="100%" />
                    <div className='infoCourses'>
                        <div>
                            <Card.Title className='text-center ' size=''> {studentInfo.cousrse.length}</Card.Title>
                            <Card.Text className='text-center'>Courses</Card.Text>
                        </div>
                        <div>
                            <Card.Title className='text-center '> 2</Card.Title>
                            <Card.Text className='text-center'>Term</Card.Text>
                        </div>

                    </div>

                    <div>
                        <Button variant="light" size="lg"> <MdLibraryAdd/> Add Course</Button>{' '}
                        <Button variant="light" size="lg">My courses</Button>{' '}
                    </div>



                    <Card.Body className='cardBody'>

                        <Card.Title ><MdPerson /> Student Name:</Card.Title>
                        <Card.Text className='text-center '>
                            {studentInfo.firstName} {studentInfo.lastName}
                        </Card.Text >
                        <Card.Title ><MdPermDeviceInformation />Student ID:</Card.Title>
                        <Card.Text className='text-center '>
                            {studentInfo.studentId}
                        </Card.Text>
                        <Card.Title ><MdAlternateEmail />Email:</Card.Title>
                        <Card.Text  className='text-center '>
                            {studentInfo.email}
                        </Card.Text>

                    </Card.Body>
                </Card>
                <div >
                    <div className='profileInfo'>
                        {studentInfo.cousrse.map((item, i) => (
                            <tr key={i}>
                                <td>{item}</td>
                                
                            </tr>
                        ))}

                    </div>
                    <div className='profileInfo'>

                    </div>

                </div>




            </div>

            

        </div>
    )
}
export default Profile