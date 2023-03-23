const express = require('express');
const app = express();
app.get('/api' , (req , res) => {
    console.log('Paso por api');
    res.json({mensaje: 'Hola Mundo', estado: 'OK'}).status(200)
} );


app.listen(3000 , () => {console.log('Escuchando en el puerto 3000')})
console.log('Hola Mundo');