const express = require("express");
const app = express();

//const user = require("./users");
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://KailashMewada:Kailash123@cluster0.wulwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/Kailash", { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.warn("DB Connected Done");
});
/*user.find({}, function(err, users) {
    if (err) {
        console.warn(err);
    } else {
        console.warn(users);
    }
})*/


// this program is for making connection with mongodb
//url=https://cloud.mongodb.com/v2/61fa04eb6dcc9f5fe9df272f#clusters