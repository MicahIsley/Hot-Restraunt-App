const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('link-to-db', (err, database) => {

});

app.listen(3000, function() {
    console.log('listening on 3000...');
});

// General form of GET request, app.get(path, callback)

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


