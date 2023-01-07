const http = require('http')
const fs = require('fs')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     let HTML = fs.readFileSync(`${__dirname}/index.html`);  // -__dirname -node variable - full path to current file
//     res.end(HTML);
// });

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    const HTML = fs.readFileSync(`${__dirname}/index.html`)
    res.end(HTML)
  } else if (req.url === '/user') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const user = {
      name: 'Anna',
      lastname: 'Hloviak'
    }
    res.end(JSON.stringify(user))
  } else {
    res.writeHead(404)
    res.end()
  }
  // res.writeHead(200, {'Content-Type': 'application/json'});

  // const names = ["francis", "james", "rob"];
  // const cars = {
  //     name: "Ford",
  //     model: "Fiesta"
  // }

  // const json = {
  //     names,
  //     cars
  // }
  // res.end(JSON.stringify(json));
})

server.listen(8181, '127.0.0.1')
console.log('server is running')
console.log(__dirname)
