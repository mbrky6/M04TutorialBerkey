const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html"); // Response header content type
  res.write("<head><link rel='stylesheet' href='#'></head>")
  res.write("<p>Request received.</p>");
  res.write("<p style='color:#FF0000'>Now die.</p>");
  res.write("<p>I mean, uh... Now hi.</p>")
  res.end();
}); // Declaring as variable/const is optional

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000")
}); // Port number, host (localhost is default), listen action