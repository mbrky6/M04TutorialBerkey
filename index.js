const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request made");
}); // Declaring as variable/const is optional

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000")
}); // Port number, host (localhost is default), listen action