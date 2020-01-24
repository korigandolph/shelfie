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