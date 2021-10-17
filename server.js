const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const mongoose = require("mongoose");

require('dotenv').config();

app.use(cors());

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to nodejs-api application version 1.0.0.0" });
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('mongo conncted');
}).catch((err) => {
    console.log('connection error.....', err);
});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
}).on("error", (err) => console.log(`Connection error ${err}`));

////////********Require My Routes***************////////
let recursiveRoutes = (folderName) => {
    
    fs.readdirSync(folderName).forEach((file) => {

        let fullName = path.join(folderName, file);
        let stat = fs.lstatSync(fullName);

        if (stat.isDirectory()) {
            recursiveRoutes(fullName);
        } else if (file.toLowerCase().indexOf('.js')) {
            require('./' + fullName)(app);
        }
    });

};

recursiveRoutes('routes');

// set port, listen for requests
const PORT = process.env.PORT || 1996;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});