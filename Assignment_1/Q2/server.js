const http = require('http')
const static = require('node-static')

const file = new static.Server('./public')

const server = http.createServer((req, res) => {
  req.addListener('end', () => {
    file.serve(req, res)
  }).resume()
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})