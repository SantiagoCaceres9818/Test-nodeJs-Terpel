const express = require('express');
const {
    addClient,
    getClientsByAge,
    getClientsSoretedByName,
} = require('../controllers/ClientController');

const router = express.Router();

router.post('/', addClient);
router.get('/sorter-by-name', getClientsSoretedByName);
router.get('/average', getClientsByAge);

module.exports = router;