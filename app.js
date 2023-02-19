const express = require("express");

// Express app
const app = express();

// Register ViewEngine
app.set("view engine", "ejs");
// app.set("views", "folder name"); When the views folder isn't called "views"

// Listen for requests
app.listen(3000); // Localhost default

app.get("/", (req, res) => {
    const blogs = [
        {title: "Mama Mia", snippet: "I-a made a spicy-a meat-aball."},
        {title: "Mafia", snippet: "I think the mafia is after me. I keep..."},
        {title: "Best Pizza Recipes", snippet: "Good day, pizza lovers! Here are som..."}
    ];
    res.render("index", {
        title: "Home",
        blogs,
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Us"
    });
});


app.get("/blogs/create", (req, res) => {
    res.render("create", {
        title: "Create New Blog"
    });
});


// 404 Page
app.use((req, res) => {
    res.status(404).render("404", {
        title: "Uh-oh!"
    });
}); // Express method set to run on every request. Because it is at the bottom of the document, it will only run if nothing above it runs first.