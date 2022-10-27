const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(MONGO_CONNECTİON , { useUnifiedTopology: true, useNewUrlParser: true })
    .then(response => console.log("Connected mongoDB"))
    .catch(error => console.log(error));