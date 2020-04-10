
const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function (req, res) {
    
    controller.getMessages()
    .then(
        (messageList) => {
            response.succes(req, res, messageList, 200)
        }
    )
    .catch(
        (e) => {
            response.error(req, res, 'Unexpect Error', 500, e)
        }
    )
})

router.post('/', function (req, res) {
    
    
    controller.addMessage(req.body.user, req.body.message)
    .then(
        ( fullMessage ) => {
            response.succes(req, res, fullMessage, 201)
        }
    )
    .catch(
        (e) => {
            response.error(req, res, e, 400, 'error')
        }
    )
})

module.exports = router