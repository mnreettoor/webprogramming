import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  user:"root",
  host:"localhost",
  password:"password",
  database:"LoginSystem"
});

app.post('/register', (req, res) => {
  
  db.query("INSERT INTO user(username, password) VALUES (?,?)", [username, password], (err, result) => {
    console.log(err);
  });
});

app.listen(3000,() =>{
  console.log("running servaer");
});

