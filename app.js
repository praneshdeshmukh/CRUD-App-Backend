require('dotenv').config(); // dotenv enabled
const express = require('express');
const cors = require("cors"); // cross-origin request
// database connection
const connectToDb = require('./config/db.js')

const app = express();

// express middleware
app.use(express.json())
app.use(express.urlencoded({extented: true}))

app.use(cors())
// initialize connection to db
connectToDb()
// app.get('/', (req,res) => {  previously was this
//     res.send('Hello World!');
// })
// then
// (req,res) => {  this much part pasted to controllers->userController.js
//     res.send('Hello World!');
// }
const userRoutes = require('./routes/userRoutes.js');

app.use('/', userRoutes)

module.exports = app;
