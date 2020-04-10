const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./network/routes')

db('mongodb://usertelegrom:usertelegrom123@ds033096.mlab.com:33096/telegrom')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

router(app);

app.use('/app', express.static(`public`))

app.listen(3000)

console.log('La app esta estuchando en el puerto 3000');

