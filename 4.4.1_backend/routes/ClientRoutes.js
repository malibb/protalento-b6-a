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

// Parametros son los que encontramos en la ruta
// http://localhost:3000/api/v1/clients/2

// Body es el cuerpo de la petición y no aparece en la ruta

// Los queries aparecen y se agregan empezando con ?,
// separados por &
// http://localhost:3000/api/v1/clients/?first_name=Juan

// Eliminar un cliente
router.delete('/:id',ClientController.deleteClient)

// Obtener un solo cliente
router.get('/:id',ClientController.getClient)


module.exports = router;