const express = require("express");

const bodyParser = require("body-parser");
const req = require("express/lib/request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var resultCalc = num1 + num2;

    res.send("The result of the Calculator is " + resultCalc);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
})

app.post("/bmicalculator", function(req, res){

    var no1 = Number(req.body.no1);
    var no2 = Number(req.body.no2);

    var resultBMI = no2 / no1;

    res.send("Your BMI is " + resultBMI);
})

app.listen(3000, function(){
    console.log("This server runs on port 3000");
})