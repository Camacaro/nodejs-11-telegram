
const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/:userid', function (req, res) {
    
    controller.listChats( req.params.userid )
    .then(
        (users) => {
            response.succes(req, res, users, 200)
        }
    )
    .catch(
        (e) => {
            response.error(req, res, 'Unexpect Error', 500, e)
        }
    )
})

router.post('/', function (req, res) {

    controller.addChat( req.body.users )
    .then(
        (data) => {
            response.succes(req, res, data, 201)
        }
    )
    .catch(
        (e) => {
            response.error(req, res, 'Unexpect Error', 500, e)
        }
    )
})


module.exports = router