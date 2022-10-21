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



// Daniel
const Profile = () => {
    // const [mypic, setMypic] = useState("./profilePic1.avif")

    return (
        <div>
            <h1>Profile</h1>



            {/* Student info  Card */}
            <div>

                <Card style={{ width: '20rem' }}>

                    <Image roundedCircle="false" src={mypic} width="100%" />
                    <div>
                        <Card.Title> 4</Card.Title>
                        <Card.Text>Courses</Card.Text>

                    </div>
                    <div>
                        <Card.Title> 2</Card.Title>
                        <Card.Text>Term</Card.Text>

                    </div>
                    <div>
                        <Button variant="light" size="lg"> <MdLibraryAdd/> Add Course</Button>{' '}
                        <Button variant="light" size="lg">My courses</Button>{' '}
                    </div>



                    <Card.Body>

                        <Card.Title><MdPerson /> Student Name:</Card.Title>
                        <Card.Text>
                            Daniel Ospina
                        </Card.Text>
                        <Card.Title><MdPermDeviceInformation />Student ID:</Card.Title>
                        <Card.Text>
                            404504
                        </Card.Text>
                        <Card.Title><MdAlternateEmail />Email:</Card.Title>
                        <Card.Text>
                            d.ospinalatorre504@mybvc.ca
                        </Card.Text>

                    </Card.Body>
                </Card>



            </div>


        </div>
    )
}
export default Profile