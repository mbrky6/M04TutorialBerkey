const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html"); // Response header content type
  
  fs.readFile("./views/index.html", (err, data) => {
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