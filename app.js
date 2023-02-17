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


// Redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about"); // Express method
});


// 404 Page
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {root:__dirname});
}); // Express method set to run on every request. Because it is at the bottom of the document, it will only run if nothing above it runs first.