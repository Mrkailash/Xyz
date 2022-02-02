// how to make route
// basically route is nothing but a url to access the particular page.
const express = require('express');
const app = express();
app.get('/about', function(req, res) {
    res.send("This is about  page");
});
app.get('/', function(req, res) {
    res.send("This is home  page");
});
app.get('/login', function(req, res) {
    res.send("This is login  page");
});
app.get('/register', function(req, res) {
    res.send("This is register  page");
});
//pp.get('/kailash', function(req, res) {
//    res.send("This is kailash  page");
//});

app.post('/kailash', function(req, res) {
    res.send("This is kailash  page");
});
app.listen(2001);