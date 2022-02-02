// this program is for model
//Make Model
//define a file with collection name
//import mongoose package
//define schema
//export model

const express = require("express");
const app = express();
const mongoose = require("mongoose");
//lets import model file that is users.js
const user = require('./users')
mongoose.connect(
    "mongodb+srv://KailashMewada:Kailash123@cluster0.wulwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/Kailash", { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.warn("DB Connected Done");
});
user.find({}, function(err, users) {
    if (err) {
        console.warn(err);
    } else {
        console.warn(users);
    }
})