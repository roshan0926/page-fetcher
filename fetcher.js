const request = require('request');
const fs = require('fs');
const http = require('http');
const argv = process.argv.slice(2)


request(argv[0], (error, response, body) => {
  fs.writeFile(argv[1], body, function (err) {
    if (err) {throw err
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${argv[1]}`)
    }
  })
});

// http.createServer(function (req, res) {
//   fs.readFile(argv[1], function(err, data) {
//     if (err) {
//       fs.readFile('404.html', function(err, data) {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//       })
//     } else {
//       res.writeHead(200, {'Content-Type': 'text/html'})
//     }
//   })
// }).listen(argv[1]);
