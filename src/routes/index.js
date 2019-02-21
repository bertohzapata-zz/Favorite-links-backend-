const express = require('express');
const router = express.Router();

const pool = require('../config/database');

router.get('/', (req, res) => {
    res.send('Hello World!');
});


module.exports = router;