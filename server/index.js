const express = require("express");
const studentRouter = require("./routers/student-router.js");
const courseRouter = require("./routers/course-router.js");


const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(5000,()=>{
    console.log("Server is running on port 5000")
});

require("./mongo-connection.js");

app.use("/students" , studentRouter);
app.use("/courses" , courseRouter);