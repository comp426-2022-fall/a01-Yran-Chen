const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'

const minimist = require('minimist');

var args = minimist(process.argv);

const port = args.port || 3000;

const server = http.createServer((req, res) => {

    var data;
        try {
            data = fs.readFileSync('./public/index.html', 'utf8');
            // console.log(data);
          } catch (err) {
            console.error(err);
          }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
})

server.listen(port, hostname, () => {
  console.log(`Server listening on port ${port}`)
})