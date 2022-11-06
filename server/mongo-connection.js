const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://fevzi:123123asd@mycluster.q7hwcfl.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true, })
    .then(response => console.log("Connected to mongodb."))
    .catch(error => console.log(error));

