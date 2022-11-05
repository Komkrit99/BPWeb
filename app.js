const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
// const port = 3000

// var path = require('path');

// app.use(express.static(__dirname,'/public'))
// app.get('/', (req, res) => {
//     var options = {
//         root: path.join(__dirname)
//     };
//     var fileName = 'index.html';
//     res.sendFile(fileName, options, function (err) {
//         if (err) {
//             next(err);
//         } else {
//             console.log('Sent:', fileName);
//         }
//     });
// })


var http = require('http');
var fs = require('fs');
process.env.PWD = process.cwd()
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  });
  app.use('/', router);
  app.listen(process.env.port || 3000);
  
  console.log('Running at Port 3000');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Bangkok University Students;');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });