const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
   
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        unique:true
    },

   
    students:{
        type: Array,
        trim: true,
        lowercase:true,
        required:true
    }

},{collection:"courses"});

const Course = mongoose.model("Course",coursesSchema);

module.exports = Course;