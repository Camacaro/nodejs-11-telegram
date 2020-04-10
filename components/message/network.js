
const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function (req, res) {
    
    const filterMessages = req.query.user || null;

    controller.getMessages( filterMessages )
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

router.patch('/:id', function (req, res) {   

    controller.updateMessage(req.params.id, req.body.message)
    .then(
        (data) => {
            response.succes(res, res, data, 200)
        }
    )
    .catch(
        (e) => {
            response.error(req, res, 'Error intermo', 500, e)
        }
    )
})

router.delete('/:id', function (req, res) {   

    controller.deleteMessage(req.params.id)
    .then(
        () => {
            response.succes(res, res, `Usuario ${req.params.id} eliminado`, 200)
        }
    )
    .catch(
        (e) => {
            response.error(req, res, 'Error intermo', 500, e)
        }
    )
})

module.exports = router