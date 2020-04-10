
const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function (req, res) {
    console.log(req.headers);

    res.header({
        "custom-header": "nuestro headers"
    })
    // res.send('Lista de mensajes')
    response.succes(req, res, 'Lista de mensajes')
})

router.post('/', function (req, res) {
    
    
    controller.addMessage(req.body.user, req.body.message)
    .then(
        () => {
            response.succes(req, res, 'Mensaje agregado', 201)
        }
    )
    .catch(
        (e) => {
            response.error(req, res, e, 400, 'error')
        }
    )

    if( req.query.error === 'ok' ) {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores')
    } else {
        response.succes(req, res, 'Mensaje agregado', 201)
    }
})

module.exports = router