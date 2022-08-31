const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
// const port = 3000

var args = require('minimist')(process.argv.slice(2));
const port = args.port

const server = http.createServer((req, res) => {

    var data;
        try {
            data = fs.readFileSync('./public/index.html', 'utf8');
            console.log(data);
          } catch (err) {
            console.error(err);
          }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(data)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})