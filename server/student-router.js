const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Student = require("./student-model.js");

// const validator = require("./validator.js");
const { validationResult, body } = require("express-validator");
const User = require("./user-model.js");


router.post("/addstudent", async (req, res) => {


    try {


        const newStudent = new Student({
            name: req.body.name,
            surname: req.body.surname,
            courses: req.body.courses
        });

        await newStudent.save();

        console.log(req.body);

        return res.send({ message: "Öğrenci Eklendi", Student: newStudent });

    } catch (e) {

        return res.send({ e: e });

    }

});



router.get(("/getstudents", async (req, res) => {


    try {

        return res.send({ Students: await Student.find() })

    } catch (err) {

        return res.status(400).json({ message: err.message })
    }

}))



module.exports = router;