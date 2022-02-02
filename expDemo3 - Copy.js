//form and query String
//console.warn("Kailash\nMewada");
const express = require('express')
const app = express();
//app.use()
app.set('view engine', 'ejs');
app.get('./login', function(req, res) {
    res.render('Login')
})
app.listen(3009);