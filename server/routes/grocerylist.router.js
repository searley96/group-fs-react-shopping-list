const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// the get request on the server side
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM shopping_list`;
    pool.query(queryText)
    .then((response) => {
        res.send(response.rows)
    }).catch((error) => {
        console.log('error in server GET', error)
        res.sendStatus(500);
    })
})

module.exports = router;