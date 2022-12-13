const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Student = require("../models/student-model.js");

// const validator = require("./validator.js");
const { validationResult, body } = require("express-validator");
const User = require("../models/user-model.js");
const { updateOne } = require("../models/student-model.js");


router.post("/addstudent", async (req, res) => {


    try {
        const newStudent = new Student({
            date: req.body.date,
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            courses: req.body.courses
        });

        await newStudent.save();

        console.log(req.body);

        return res.send({ message: "Öğrenci Eklendi", Student: newStudent });

    } catch (e) {

        return res.send({ e: e });

    }

});



router.get("/getstudents", async (req, res) => {


    try {
        const id = req.params;
        return res.send({ students: await Student.find() });
    } catch (e) {
        return res.send({ e: e, m: "error" });
    }

});



router.post("/deletestudent", async (req, res) => {


    try {
        console.log(req.body);

        const result = await Student.findByIdAndDelete({ _id: req.body.id });

        return res.send({ result })
    } catch (e) {
        return res.send({ e: e, m: "error" });

    }



})

router.post("/togglepaid", async (req, res) => {


    try {
        console.log(req.body);

        const student = await Student.findOne({ _id: req.body.id });

        let newCourse = student.courses.map((course) => {
            if (course.class == req.body.item) course.isPaid ? course.isPaid = false : course.isPaid = true;
            return course;

        })

        const updatedStudent = await Student.updateOne({ _id: req.body.id }, { $set: { courses: newCourse } });

        return res.send({ updatedStudent })
    } catch (e) {
        return res.send({ e: e, m: "error" });

    }

})

module.exports = router;