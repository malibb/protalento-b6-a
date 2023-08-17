const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const { ClientController } = require('./../controllers/');
//desestructuracion

//obtenemos todos los clientes
router.get('/', ClientController.getClients);

//insertamos un solo cliente
router.post('/', ClientController.insertClient);

// Actualizamos un cliente
router.put('/:id', ClientController.updateClient)

// Eliminar un cliente
router.delete('/:id',ClientController.removeClient)

// Obtener un solo cliente
router.get('/:id',ClientController.getClient)


module.exports = router;