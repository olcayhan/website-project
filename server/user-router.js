const { Router } = require("express");
const express = require("express");
const router = express.Router();
const User = require("./user-model.js");

const validator = require("./validator.js");
const { validationResult } = require("express-validator");




//=========================== GET ALL USERS ==================================

router.get("/getallusers", async (req, res) => {

    try {

        return res.send({ users: await User.find({}) });

    } catch (e) {
        return res.send({ message: "Bir hata oluştu!", error: e });
    }

})



//=========================== ADD NEW USER ==================================


router.post("/adduser", validator.validateNewUser() ,async (req, res) => {


    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.send({validatorErrors:errors.array()});
    }

    console.log(req.body)
    try {
        const newUser = new User({

            name: req.body.name,

            surname: req.body.surname,

            email: req.body.email,

            password: req.body.password
        });


        await newUser.save();

        return res.send({ message: "Yeni kullanıcı oluşturuldu", user: newUser });

    } catch (e) {
        return res.send({ message: "bir hata olustu", error: e });
    }

});

//========================== DELETE USER ===========================

router.post("/deleteuser", async (req, res) => {

    
    console.log(req.body);

    try {

      
        const _id = req.body._id;
        const result = await User.findByIdAndDelete(_id);


        if (!result) {
            return res.send({ message: "kullanıcı bulunamadı!" });
        }
        console.log(result);

        return res.send({ message: "Kullanıcı silindi."});


    } catch (e) {
        return res.send({ message: "bir hata oluştu!", error: e });
    }


})





module.exports = router;