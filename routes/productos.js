const express = require('express');
const router = express.Router();
const readProduct = require('../controller/productsController/readProducts');

router.get('/', readProduct);

module.exports = router;
