const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const groceryList = require('./routes/grocerylist.router')
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
app.use('/shopping_list', groceryList)
// and plug them in here with `app.use()`

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});