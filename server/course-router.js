const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Student = require("./student-model.js");
const Course = require("./course-model");

// const validator = require("./validator.js");
const { validationResult, body } = require("express-validator");



// =========================================== ADD STUDENT TO COURSE ====================================================
router.post("/addstudent", async (req, res) => {
    try {

        const studentId = req.body.studentId;

        const student = await Student.findById({ _id: studentId });

        const course = await Course.findOne({ name: req.body.courseName });



        const studentsOfCourse = Array.from(course.students);

        let isStudentInCourse = studentsOfCourse.filter(findStudent => (findStudent._id !== student._id))




        if (!(isStudentInCourse.length)) {

            student.courses.push(course.name);
            course.students.push(student);

            await student.save();
            await course.save();

            return res.send({ message: `${student.name}  ${student.surname} isimli öğrenci ${course.name} kursuna başarıyla eklendi.`, success: true });

        } else {

            return res.send({ message: `${student.name}  ${student.surname} zaten ${course.name} ekli.`, success: false });

        }


    } catch (e) {
        return res.send({ e: e, m: "error", success: false });
    }
});


// ======================================== DELETE STUDENT FROM ARRAY ==============================================================

router.post("/deletestudent", async (req, res) => {
    try {

        const studentId = req.body.studentId;

        const student = await Student.findById({ _id: studentId });

        const course = await Course.findOne({ name: req.body.courseName });



        const studentsOfCourse = Array.from(course.students);

        let isStudentInCourse = studentsOfCourse.filter(findStudent => (findStudent._id !== student._id))




        if ((isStudentInCourse.length)) {

            // student.courses.push(course.name);
            console.log(student.courses.indexOf(course.name));
            let a = student.courses.indexOf(course.name)
            student.courses.splice(a, 1);
            console.log(student.courses);

            await student.save()
            // course.students.push(student);

            // await student.save();
            // await course.save();

            return res.send({ message: `${student.name}  ${student.surname} isimli öğrenci ${course.name} kursunandan başarıyla kaldırıldı!`, success: true });

        } else {

            return res.send({ message: `${student.name}  ${student.surname} adlı öğrenci ${course.name} kursuna kayıtlı değil.`, success: false });

        }


    } catch (e) {
        return res.send({ e: e, m: "error", success: false });
    }
});






// ================================================= CREATE COURSE ========================================================

router.post("/addcourse", async (req, res) => {

    try {

        const newCourse = new Course({
            name: req.body.name,
            students: []
        });

        await newCourse.save();

        return res.send({ course: newCourse });
    } catch (e) {
        return res.send({ e: e, m: "error" });
    }
});



module.exports = router;