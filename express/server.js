const express = require('express')
const hbs = require('express-handlebars')
const app = express()

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts/'
}))
app.set('view engine', 'hbs')

// Middleware
app.use('/css', express.static(__dirname + '/public/css'))

app.use('/', (req, res, next) => {
  console.log('someone made request from:' + req.url)
  res.cookie('coockieName', 'coockieValue')
  next()
})

app.get('/', (req, res) => {
  res.send(`
        <html>
            <head>
                <link type="text/css" rel="stylesheet"
                href="/css/style.css">
            </head>
            <body>
                <h1>Node app</h1>
            </body>
        </html>
    `)
})

app.get('/api/user', (req, res) => {
  res.send({
    name: 'Anna',
    lastname: 'Glovyak'
  })
})

app.get('/user', (req, res) => {
  res.render('user', {
    title: 'User profile',
    name: 'Anna',
    lastName: 'Glovyak',
    valid: true,
    pets: ['cat', 'dog', 'bird'],
    parents: [
      { dad: 'Ivan', mother: 'Olga' }
    ]
  })
})
/// params

app.get('/api/:user/:id', (req, res) => {
  const id = req.params.id
  const username = req.params.user
  res.send(`
        <html>
            <body>
                <h1>The user id is ${id}, and username is ${username}</h1>
            </body>
        </html>
    `)
})

// /api/car?brand=ford&year=2017
app.get('/api/car', (req, res) => {
  const brand = req.query.brand
  const year = req.query.year

  res.send({
    brand,
    year
  })
})

const port = process.env.PORT || 3000
app.listen(port)
