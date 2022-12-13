// const express = require("express");
// const router = express.Router();
// const Bill = require("../models/bill-model.js");


// router.post("/addbill", async (req, res) => {
//     try {
//         const newBill = new Bill({
//             date: req.body.date,
//             class: req.body.class,
//             isPaid: req.body.isPaid,
//             localDate: req.body.localDate,
//             studentID: req.body.studentID
//         });

//         await newBill.save();

//         console.log(req.body);

//         return res.send({ message: "Fatura Eklendi", Bill: newBill });

//     } catch (e) {

//         return res.send({ e: e });

//     }

// });

// router.post("/togglepaid", async (req, res) => {


//     try {
//         console.log(req.body);

//         const result = await Bill.find({});
//         console.log(result);
//         // return res.send({ result })
//     } catch (e) {
//         return res.send({ e: e, m: "error" });

//     }

// })

// module.exports = router;