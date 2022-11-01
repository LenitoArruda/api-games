const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Game = require("./games/Game");
const connection = require("./database/database");

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const gamesController = require("./games/GamesController");
app.use("/", gamesController);


//Static
app.use(express.static('public'));

//Database
connection.authenticate()
    .then(() => {
        console.log("Successful connection!")
    }).catch((error) => {
        console.log(error);
    });



app.listen(8080, () => {console.log("API RUNNING!")});