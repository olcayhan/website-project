const express = require("express");
const dotenv = require("dotenv");

const app = express();
require("./mongo-connection.js");


app.use(express.json());


app.listen(process.env.HOST , ()=> console.log(`Server is running on localhost ${process.env.HOST}`) );



