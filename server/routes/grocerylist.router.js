const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST
router.post('/', (req, res) => {
    // ************ EDIT THIS WHEN YOU HAVE THIS INFO ************
    const newItem = req.body;
    console.log(newItem);
    // const newItemQuantity = req.body.quantity;
    // console.log(newItemQuantity);
    // const newItemUnit = req.body.unit;
    // console.log(newItemUnit);
    const sqlText = 'INSERT INTO shopping_list (name, quantity, unit) VALUES ($1, $2, $3);';

    pool.query(sqlText, [newItem.name, newItem.quantity, newItem.unit])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch(() => {
            console.log(`Error making query ${sqlText}`, error);
            res.sendStatus(500); })

        })
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


//put
router.put('/:id', (req, res) => {
    const newShoppingListID = req.params.id;
    console.log(newShoppingListID);
    const queryText = `UPDATE "shopping_list" SET "purchased" = TRUE WHERE "id" = $1`

    pool.query(queryText, [newShoppingListID])
    .then((response) => {
        res.sendStatus(200);
    }).catch((err) => {
        alert('error inside Server PUT')
    })
})


// DELETE ALL
router.delete('/delete', (req, res) => {
    const queryText = `DELETE FROM shopping_list;`;

    pool.query(queryText)
    .then((response) => {
        console.log('Items deleted', response);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error making query ${sqlText}`, error);
        res.sendStatus(500);
    })
})




module.exports = router;