require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');

app.use(cors())
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))
  console.log('db connected')
}).catch(err => console.log(err))

//ENDPOINTS
app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)
app.put('/api/product/:id', ctrl.editProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)