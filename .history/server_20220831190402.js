const http = require('http')
const fs = require('fs');
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {

    var data2;
        try {
            data2 = fs.readFileSync('./public/index.html', 'utf8');
            console.log(data);
          } catch (err) {
            console.error(err);
          }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(data2)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})