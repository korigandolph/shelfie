require('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');

app.use(express.json())

massive(CONNECTION_STRING)
    .then(db=> {
        app.set('db', db)
        console.log('db connected')
        app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
    })

//ENDPOINTS
app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.editProduct)