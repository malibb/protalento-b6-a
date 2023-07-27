const express = require('express');
const router = express.Router();

//   '/api/'
router.get('/', (req, res) => {
    res.send('Respuesta al get: Hello world!');
  });

module.exports = router;