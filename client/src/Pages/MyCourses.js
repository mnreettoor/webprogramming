import React from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mycourses from '../JSON/mycourses.json';
import courses from '../JSON/courses.json';

const MyCourses = ({student, setStudent, id})=>{
    
    const studentId = id;

    const handleDropCourse = (courseId) => {
        const newStudentCourses = student.courses.filter(courseid => courseid !== courseId )
        setStudent({ ...student, courses:[...newStudentCourses]})
    }

    return (
        <div>
            {student.courses.map((myCourseId, index) => (
                <div key={index}>
                        <Card style={{width: "80%", margin: "20px auto"}}>
                            <Card.Header>
                                <div style={{display:"table",width:"100%"}}>
                                    <div style={{display:"table-row"}}>
                                        <div id="myCourseId" style={{display:"table-cell"}}><b>{courses.find(id => id.courseId === myCourseId).courseDetails.courseName}</b></div>
                                        <div style={{display:"table-cell", textAlign:"right"}}><b>{courses.find(id => id.courseId === myCourseId).courseId}</b></div>                
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <div>
                                        <b>Tutor:</b> {courses.find(id => id.courseId === myCourseId).courseDetails.tutor}
                                    </div>
                                    <div>
                                        <b>Campus:</b> {courses.find(id => id.courseId === myCourseId).courseDetails.campus}
                                    </div>
                                    <div>
                                        <b>Start Date:</b> {courses.find(id => id.courseId === myCourseId).courseDetails.startDate}
                                    </div>
                                    <div>
                                        <b>End Date:</b> {courses.find(id => id.courseId === myCourseId).courseDetails.endDate}
                                    </div>
                                    <div>
                                        <b>Schedule:</b> {courses.find(id => id.courseId === myCourseId).courseDetails.schedule}
                                    </div>
                                </Card.Text>
                                <Button variant="danger" style={{marginRight: "10px"}} onClick={() => handleDropCourse(myCourseId)}>Drop</Button>

                            </Card.Body>
                        </Card>
                </div>
            ))}
        </div>
    )   
}




export default MyCourses