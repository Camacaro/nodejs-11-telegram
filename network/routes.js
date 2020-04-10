const express = require('express')
const messege = require('../components/message/network')

const routes = function(server) {
    server.use('/messege', messege)
}

module.exports = routes;