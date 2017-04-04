var express = require('express')

var db = require('../db')

module.exports = {
  get,
  add,
  save,
  login
}

function get (req, res) {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function add (req, res) {
  res.render('add')
}

function save (req, res) {
  const user = req.body
  db.addUser(user)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function login (req, res) {
  res.render('login')
}
