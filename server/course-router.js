const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Student = require("./student-model.js");
const Course = require("./course-model");

// const validator = require("./validator.js");
const { validationResult, body } = require("express-validator");



router.post("/addstudent", async (req, res) => {


    try {
        
        const studentId = req.body.studentId;
        const student = await Student.findById({_id : studentId});

        const course = await Course.findOne({name:req.body.courseName});

        course.students.push(student);
        student.courses.push(req.body.courseName);

        await student.save();
        await course.save();
        
     

        

       

        return res.send({ course:course });
    } catch (e) {
        return res.send({ e: e, m: "error" });
    }
});



router.post("/addcourse", async (req, res) => {

console.log("test")
    try {
        
        const newCourse = new Course({
            name : req.body.name,
            students : []
        });
        
        await newCourse.save();

        return res.send({ course:newCourse });
    } catch (e) {
        return res.send({ e: e, m: "error" });
    }
});




module.exports = router;