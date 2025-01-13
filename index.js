const http = require('http');
const port = process.env.PORT || 1337;

const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<html><body><h1>Hello I am Kshitij Jha</h1></body></html>");
});


server.listen(port);

console.log(`Server running`);
