//define constant needed for the server and node express
const express = require('express');
// body parser for extract data from form
const bodyParser = require('body-parser');
//path provides utility for work with file and directory
const path = require('path');
//needed http for working with express server
const http = require('http');
const app = express();

const api = require('./server/routes/api');

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

//Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

//Set our api routes
app.use('/api', api);

//Return other routes Angular index file..
app.get('*', (req,res) => {

  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.join(__dirname, `dist/codepostnet/${req.url}`));
      } else {
        res.sendFile(path.join(__dirname, 'dist/codepostnet/index.html'));
      }
});

//Set port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create the HTTP server
const server = http.createServer(app);

server.listen(port, () =>console.log(`Running on localhost:${port}`));
