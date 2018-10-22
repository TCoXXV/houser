const express = require('express');
const bP = require('body-parser');
const massive = require('massive');
require('dotenv').config();

//controller
const controller = require('./controller.js');

massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db)
}).catch(error => {
    console.log('Error on massive', error)
});

const app = express();
app.use(bP.json());

app.get('/api/houses', controller.read);
app.post('/api/house', controller.create);
app.delete('/api/house/:id', controller.delete)


const port = 4000;
app.listen(port, ()=>{
    console.log(`Server in port ${port} ⛵️`)
})