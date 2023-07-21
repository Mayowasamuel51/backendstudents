const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Student = new Schema({
    firstName: {
        type: String,
        required:[true, 'please input firstName']
    },
    lastName: {
        type: String,
        required:[true, 'please input lastName']
    },
    age:{
        type: String,
        required:[true, 'please input age']
    },
    parentName: {
        type: String,
        required:[true, 'please input parentName']
    },
    parentNumber: {
        type: String,
        required:[true, 'please input parentNumber']
    },
    image: {
        data: String,
        contentType:String
    },
    gender: {
        type: String,
        // required:[true, 'please input gender']
    },
    studentclass: {
        type: String,
        required:[true, 'please input class']
    },
    schoolfees: {
        type: Number,
        required:[true, 'please input schoolfees']
    }
})
const Studentmodel = model("students", Student);
module.exports = Studentmodel;