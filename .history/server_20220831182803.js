const http = require('http')

const hostname = '127.0.0.1'
const port = 3000


const fs = require('fs');

try {
    const data = fs.readFileSync('demo01.txt', 'utf8');
    console.log(data);
  } catch(e) {
    throw e;
  }

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(data)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})