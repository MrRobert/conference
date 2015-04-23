// This is the main file of our chat app. It initializes a new
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal

var express = require('express'),
    app = express();
var fs = require('fs');
var moment = require('moment');
var port = process.env.PORT || 4000;


app.listen(port);
require('./config')(app);

app.get('/', function (req, res) {

    //============= ADD cross domain for your side ====================
    // res.set("Access-Control-Allow-Credentials", true);
    // res.set("Access-Control-Allow-Origin", "http://localhost:4000");
    // ================================================================

    res.render('home');
});

app.get('/crawler', function (req, res) {
    res.status(200).json(new Object());
});

console.log('Your application is running on http://localhost:' + port);
