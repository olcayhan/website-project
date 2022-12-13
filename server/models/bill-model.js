const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
    class: {
        type: String,
        required: true,
    },
    isPaid: {
        type: Boolean,
        required: true,
    },
    localDate: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    studentID: {
        type: String,
        trim: true,
    }

}, { collection: "bills" });

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;