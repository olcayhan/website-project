const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Student = require("../models/student-model.js");

// const validator = require("./validator.js");
const { validationResult, body } = require("express-validator");
const User = require("../models/user-model.js");


router.post("/addstudent", async (req, res) => {


    try {
        const newStudent = new Student({
            date: req.body.date,
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email: req.body.email,
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


module.exports = router;