import React, { useState } from 'react';
import {Card, Button } from 'react-bootstrap';
import coursesInfo from "../JSON/courses.json";

const AddCourses = ({student, setStudent}) => {

    const allCoursesIds = coursesInfo.map(course => course.courseId)
    const coursesNotTakenByStudent = allCoursesIds.filter(courseId => !student.courses.includes(courseId));

    const handelAddCourse = (courseId)=>{
        setStudent({ ...student, courses:[...student.courses, courseId]})
    }

    return (
        <div>
            {coursesNotTakenByStudent.map((myCourseId, index) => (
                <div key={index}>
                    <Card style={{ width: "80%", margin: "20px auto" }}>
                        <Card.Header>
                            <div style={{ display: "table", width: "100%" }}>
                                <div style={{ display: "table-row" }}>
                                    <div id="myCourseId" style={{ display: "table-cell" }}><b>{coursesInfo.find(id => id.courseId === myCourseId).courseDetails.courseName}</b></div>
                                    <div style={{ display: "table-cell", textAlign: "right" }}><b>{coursesInfo.find(id => id.courseId === myCourseId).courseId}</b></div>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <div>
                                    <b>Tutor:</b> {coursesInfo.find(id => id.courseId === myCourseId).courseDetails.tutor}
                                </div>
                                <div>
                                    <b>Campus:</b> {coursesInfo.find(id => id.courseId === myCourseId).courseDetails.campus}
                                </div>
                                <div>
                                    <b>Start Date:</b> {coursesInfo.find(id => id.courseId === myCourseId).courseDetails.startDate}
                                </div>
                                <div>
                                    <b>End Date:</b> {coursesInfo.find(id => id.courseId === myCourseId).courseDetails.endDate}
                                </div>
                                <div>
                                    <b>Schedule:</b> {coursesInfo.find(id => id.courseId === myCourseId).courseDetails.schedule}
                                </div>
                            </Card.Text>
                            <Button variant="success" style={{ marginRight: "10px" }} onClick={() => {handelAddCourse(myCourseId) }}>Add</Button>

                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}
export default AddCourses