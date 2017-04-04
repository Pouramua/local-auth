const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const passport = require('passport')

const index = require('./routes/index')

const server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.get('/', index.get)
server.get('/add', ensureLoggedIn(), index.add)
server.post('/add', ensureLoggedIn(), index.save)
server.get('/login', index.login)
