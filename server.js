var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {

        name: "Michael",
        phoneNumber: "6197883033",
        email: "michaeljohnson729gmail.com",
        userName: "Michael"
    }
]
var waitList = [
    {

        name: "Michael",
        phoneNumber: "6197883033",
        email: "michaeljohnson729gmail.com",
        userName: "Mike"
    }
]

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

app.post("/api/reservations", function (req, res) {
    var newreservation = req.body;
    console.log(newreservation);
    if (reservations.length <= 4) {
        reservations.push(newreservation);
    }
    else {
        waitList.push(newreservation);
    }
    res.json(newreservation);
});

app.post("/api/waitlist", function (req, res) {
    var newwaitlist = req.body;
    console.log(newwaitlist);
    waitList.push(newwaitlist);
    res.json(newwaitlist);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
