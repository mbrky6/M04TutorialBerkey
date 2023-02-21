const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// Express app
const app = express();

// Connect to MongoDB database
const dbURI = "mongodb+srv://BlogSite:trgyg4eFrDmvAw@nodetutorial.uyarppy.mongodb.net/nodetut?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// Register ViewEngine
app.set("view engine", "ejs");
// app.set("views", "folder name"); When the views folder isn't called "views"

// Middleware & static files
app.use(morgan("dev"));
app.use(express.static("public"));

// Mongoose & Mongo sandbox routes
app.get("/add-blog", (req, res) => {
    const blog = new Blog({
        title: "Local chef's house burns down",
        snippet: "He claimed to be making the world's spiciest meatball.",
        body: "This story is currently developing. Check back again for more updates."
    });

    blog.save() // Save new instance of Blog() to the database
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/all-blogs", (req, res) => {
    Blog.find() // Get all data from the database
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/single-blog", (req, res) => {
    Blog.findById("63f54aad19096a62a23a30a5") // Get a single piece of data using its Object ID
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

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