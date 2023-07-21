const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const registerclass = new Schema({
    className: {
        type: String,
        required:[true, 'please input firstName']
    },
   
})
const classmodel = model("class", registerclass);
module.exports = classmodel;