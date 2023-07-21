const express = require('express')
const app = express()
const mongoose = require("mongoose");
const cors = require('cors')
// for frontend apps
app.use(cors())
//http response and request 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ENV Connection
const dotenv = require("dotenv");
const  dotenvb = require('dotenv').config();
//database connections
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true,}) .then(() => console.log("Database Connected")).catch((err) => console.log(err));



//middiware routes
const classes = require('./routes/class-route')
const student_routes = require('./routes/student-route')
app.use('/api/students', student_routes)
app.use('/api/class', classes)


app.get('/', (req, res) => {
    res.send('hello')
})
// global error , unknown error
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res
        .status(error.status || 500)
        .json({ message: error.message || "An unknown error occurred" });
});
app.listen(8000, () => {
    console.log('Server.................')
})