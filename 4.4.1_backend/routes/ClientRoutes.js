const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const { ClientController } = require('./../controllers');

router.get('/', ClientController.getClients);

module.exports = router;