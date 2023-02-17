const express = require("express");

// Express app
const app = express();

// Listen for requests
app.listen(3000); // Localhost default

app.get("/", (req, res) => {
    // Use res.send() to send text or individual HTML lines
    res.sendFile("./views/index.html", {root:__dirname}); // Express method
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", {root:__dirname}); // Express method
});