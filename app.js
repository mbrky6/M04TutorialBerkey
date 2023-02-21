const express = require("express");
const morgan = require("morgan");

// Express app
const app = express();

// Register ViewEngine
app.set("view engine", "ejs");
// app.set("views", "folder name"); When the views folder isn't called "views"

// Listen for requests
app.listen(3000); // Localhost default

// Middleware & static files
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    const blogs = [
        {title: "Mama Mia", snippet: "I-a made a spicy-a meat-aball."},
        {title: "I figured it out!", snippet: "After years of research, I finally know what the deal with airline food is."},
        {title: "Best Pizza Recipes", snippet: "6 mouthwatering pizzas for any occasion."}
    ];
    res.render("index", {
        title: "Home",
        blogs,
    });
});

app.use((req, res, next) => {
    console.log("Carrying on...");
    next(); // Server continues down the document
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