/*
SOLUTION TO ERROR: Client does not support authentication protocol requested by server
Execute the following query in MYSQL Workbench
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
Where root as your user localhost as your URL and password as your password
Then run this query to refresh privileges:
flush privileges;
*/
import express from 'express'
import mysql from 'mysql'
import bodyParser from "body-parser"
import cors from 'cors'

const app = express();
const port = 3005;
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bvcdatabase",
})

app.use(cors({
    origin: '*'  
}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


// INSERT A NEW STUDENT INTO THE DB
app.post("/api/newstudent", (req, res) => {
    const sqlInsertNewStudent = "INSERT INTO students (firstName, lastName, dateOfBirth, email, password) VALUES (?,?,?,?,?)" 
    
    const fName = req.body.FirstName
    const lName = req.body.LastName
    const dateOfBirth = req.body.DateOfBirth
    const email = req.body.Email
    const password = req.body.Password

    db.query(sqlInsertNewStudent, [fName, lName, dateOfBirth, email, password], (err, result) => {
        console.log(result)
        if(err) {
            console.log(err)
        }
    })
})

// AUTHENTICATE A USER
app.post("/api/studentinfo", (req, res) => {
    const sqlGetInfoStudent = "SELECT * FROM students WHERE email = ? AND password = ?"

    const email = req.body.Email
    const password = req.body.Password

    db.query(sqlGetInfoStudent, [email, password], (err, result) => {
        console.log(result)
        if(err) {
            console.log(err)
        }
        res.send(result)
    })
})

// GET THE INFO FROM ONE STUDENT BASED ON THE EMAIL
app.get("/api/student/:email", (req, res) => {
    const sqlGetStudentFromEmail = "SELECT * FROM students WHERE email = ?"
    const email = req.params.email

    db.query(sqlGetStudentFromEmail, email, (err, result) => {
        res.send(result)
        console.log(result)
    })
})

// GET INFO FROM ALL STUDENTS
app.get("/api/studentsList", (req, res) => {
    const sqlGetAllStudents = "SELECT * FROM students";

    db.query(sqlGetAllStudents, (err, result) => {
        console.log(result)
        if(err) {
            console.log(err)
        }
        res.send(result)
    })
})