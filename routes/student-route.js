const express = require('express');
const router = express.Router();
const StudentContoroller = require('../Controllers/studenet-controller')
// https request  below
// get , post , put, delete

// App  features Below

// create new studnets and parent infomation
router.post('/',StudentContoroller.uploadedUserPhoto, StudentContoroller.createStudent);


// update student infomation by name or parentname 

//  upload student picture

/// get all student base on classes
router.get('/classes/:className', StudentContoroller.getclass)
//  get all student

// find student by name 


// know those student who has been school fee payment



module.exports = router;