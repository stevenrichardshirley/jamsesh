// JavaScript source code
const express = require('express');
let members = require('./src/utility/api/profileSearch.json');



let app = express();
let admin = express(); // the sub app

app.use('/admin',admin);

app.use(express.static(__dirname + '/src'));

app.use(express.static(__dirname + '/src/component'));

app.use(express.static(__dirname + './src/utility/api'));




// Routes



admin.get('/api', function (req, res) {
    return res.json(members);
});


app.get("/api/id", function (req, res) {
    return res.json(members);
});


var port = process.env.PORT || 3000;

app.listen(port);

