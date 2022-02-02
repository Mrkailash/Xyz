// this is model for database  this connect with main file that is nodeDemo5.js

const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId(),
    name: String,
    email: String,
    password: String

});
module.exports = mongoose.model('users.js', userSchema);