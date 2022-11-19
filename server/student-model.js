const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
   
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
    },

    surname:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        maxlenght:20
    },

    courses:{
        type: Array,
        trim: true,
        lowercase:true,
        required:true
    }

},{collection:"students"});

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;