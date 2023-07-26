// include packages and define sever related variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const generatePassword = require('./generate-password.js')
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// setting body-parser 因為太常用，已被 express 納入，所以不需要再 require 及 use(bodyParser.url)
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // console.log('req.body', req.body)
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password, options })  // 大括號內等同 { password: password, options: options }
})

// start the express sever and listening for connections
app.listen(port, () => {
  console.log(`The Express server is running on http://localloast:${port}`)
})