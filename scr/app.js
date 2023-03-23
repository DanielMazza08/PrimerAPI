const express = require('express');
const app = express();
const datos = require('../data/data.json');
app.get('/api' , (req , res) => {
    console.log('Paso por api');
    res.json(datos.personas).status(200)
} );


app.listen(3000 , () => {console.log('Escuchando en el puerto 3000')})

