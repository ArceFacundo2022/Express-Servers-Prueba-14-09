// Importaciones de librerias
const express = require('express');


//Inicializar librerias
const app = express();

//Configuraciones
const port = 5000;

//Middlewares
app.use(express.json());

//Rutas
app.use(require('./src/routers/admin-routers'))

//Inicio del server
app.listen(port,() =>{ console.log(`Se inicio el servidor en el puerto: ${port}`)})