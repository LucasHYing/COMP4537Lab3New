const http = require('http'); // Module for creating HTTP server.
const url = require('url'); // Module for URL resolution and parsing.
const utils = require('./modules/utils');

// Create an HTTP server that listens for requests.
const server = http.createServer((req, res) => {
  // Parse the incoming request URL and extract the query parameters.
  const queryObject = url.parse(req.url, true).query;
  
  if (queryObject.name) {
    //create a greeting message using the utility function.
    const greeting = utils.getDate(queryObject.name);
    // Write a 200 OK response header with the content type HTML.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<div style="color: blue;">${greeting}</div>`);
  } else {
    //write a 400 Bad Request response header.
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end(`<div style="color: red;">Error: Name parameter is missing</div>`);
  }
});

// Set the port for the server to listen on. Use the environment's PORT variable if available, otherwise default to 3000.
const port = process.env.PORT || 4000;

// Start the server and have it listen on the specified port.
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
