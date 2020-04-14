const express = require('express')
const messege = require('../components/message/network')
const user = require('../components/user/network')
const chat = require('../components/chat/network')

const routes = function(server) {
    server.use('/messege', messege)
    server.use('/user', user)
    server.use('/chat', chat)
}

module.exports = routes;