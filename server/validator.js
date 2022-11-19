const { body } = require("express-validator");
const User = require("./user-model");


const validateNewUser = () => {
    return [
        body("email").trim().isEmail().withMessage("Geçerli bir email girin!")

            .custom(async (value, { req }) => {

                if (await User.findOne({ email: value })) {
                    throw new Error("Bu maila sahip bir kullanıcı zaten var!");
                } else {
                    return true;
                }
            }),

        body("password").trim().isLength({ min: 6 }).withMessage("Sifre en az 6 karakterden oluşmalı!")
            .isLength({ max: 20 }).withMessage("Sifre en fazla 20 karakterden oluşmalı!"),

        body("name").trim().isLength({ min: 2 }).withMessage("İsim en az 2 karakterden oluşmalı!")
            .isLength({ max: 30 }).withMessage("İsim en fazla 30 karakterden oluşmalı!"),

        body("surname").trim().isLength({ min: 2 }).withMessage("Soyisim en az 2 karakterden oluşmalı!")
            .isLength({ max: 30 }).withMessage("Soyisim en fazla 30 karakterden oluşmalı!"),
    ]
}

module.exports = {
    validateNewUser
}




const validateNewStudent = () => {
    return [

   
        body("name").trim().isLength({ min: 2 }).withMessage("İsim en az 6 karakterden oluşmalı!")
            .isLength({ max: 30 }).withMessage("İsim en fazla 20 karakterden oluşmalı!"),

        body("surname").trim().isLength({ min: 2 }).withMessage("Soyisim en az 2 karakterden oluşmalı!")
            .isLength({ max: 30 }).withMessage("Soyisim en fazla 30 karakterden oluşmalı!"),
    ]
}

module.exports = {
    validateNewStudent
}
