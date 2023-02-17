const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((req, res) => {
  // Lodash
  let num = _.random(0, 20);
  console.log(num);

  // Function that only gets called once
  const greet = _.once(() => {
    console.log("Hello");
  });

  // Greet once
  greet(); // Called
  greet(); // Not called

  res.setHeader("Content-Type", "text/html"); // Response header content type
  
  let path = "./views/";
  switch(req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200; // Successful
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200; // Successful
      break;
    case "/about-me":
      res.statusCode = 301; // Resource moved permanently

      // Redirect
      res.setHeader("Location", "/about");
      break;
    default:
      res.statusCode = 404; // Resource not found
      path += "404.html";
      break;
  } // switch(Webpage to access)

  // Send an HTML file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } // if (read failed);
    else {
      // res.write(data);
      res.end(data); // Can send directly through end method if only one line
    } // else
  });
}); // Declaring as variable/const is optional

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000")
}); // Port number, host (localhost is default), listen action