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
require('./default_avatar');

app.get('/', function (req, res) {

    //============= ADD cross domain for your side ====================
    // res.set("Access-Control-Allow-Credentials", true);
    // res.set("Access-Control-Allow-Origin", "http://localhost:4000");
    // ================================================================

    res.render('home');
});

app.get('/conference', function (req, res) {
    var lstAvatar = [];
    var lstUserOnSys = [];

    for(var i= 0; i < 10; i++){
        lstAvatar.push(Default_Avatar.default_avatar[randomIntInc(0, Default_Avatar.default_avatar.length - 1)]);
    }

    for(var y= 0; y < Default_Avatar.default_avatar.length; y++){
        lstUserOnSys.push(Default_Avatar.default_avatar[randomIntInc(0, Default_Avatar.default_avatar.length - 1)]);
    }
    res.render('conference', {
        lstAvatar : lstAvatar,
        lstName : Default_Avatar.demo_name,
        lstUserOnSys : lstUserOnSys
    });
});

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

console.log('Your application is running on http://localhost:' + port);
