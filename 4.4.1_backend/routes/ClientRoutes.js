const express = require('express');
const router = express.Router();

router.get('/', () => "client");

module.exports = router;