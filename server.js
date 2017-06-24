const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// Setting up Express App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Array for waiting list, and reserved tables
var waitingList = [];
var reservations = [];

MongoClient.connect('link-to-db', (err, database) => {

});

// Routing
app.listen(3000, function() {
    console.log('listening on 3000...');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); //Go write index.html

});


app.get('/reserve', (req, res) => {
    res.sendFile(__dirname + '/reserve.html');

});

app.get('/tables', (req, res) => {
    res.sendFile(__dirname + '/tables.html');

});

app.post('/reserve', (req,res) => {
    //so you've received a request to make a reservation
    //Fields Name, Phone Number, Email, Unique ID

    var newTable = req.body;

    console.log(newTable);

    if(reservation.length >= 5) {
        waitingList.push(newTable);
    } else {
        reservations.push(newTable);
    }

    res.json(newTable);

});

function Table(name, phoneNumber, email, uniqueId) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.uniqueId = uniqueId;
};
