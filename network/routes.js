const express = require('express')
const messege = require('../components/message/network')
const user = require('../components/user/network')

const routes = function(server) {
    server.use('/messege', messege)
    server.use('/user', user)
}

module.exports = routes;