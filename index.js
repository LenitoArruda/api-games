const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var DB = {
    
    games: [
        {
            id: 23,
            title: "COD",
            year: 2019,
            price: 60
        },
        {
            id: 35,
            title: "Mario",
            year: 2000,
            price: 50
        },
        {
            id: 49,
            title: "MOBA",
            year: 2010,
            price: 20
        },
        {
            id: 55,
            title: "FIFA",
            year: 2022,
            price: 200
        },
    ]
}

app.get("/", () => {

    
});

app.listen(45678, () => {console.log("API RUNNING!")});