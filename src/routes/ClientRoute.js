const express = require('express');
const {
    addClient,
    getClientsByAge,
    getClientsSoretedByName,
    getClientsAverage
} = require('../controllers/ClientController');

const router = express.Router();

router.post('/', addClient);
router.get('/sorter-by-name', getClientsSoretedByName);
router.get('/sorter-by-age', getClientsByAge);
router.get('/average', getClientsAverage);

module.exports = router;