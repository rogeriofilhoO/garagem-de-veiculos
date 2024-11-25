const express = require('express');

const app = express();

const port = 8080; 
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
    res.send("Você acesou a rota raíz.");
});


app.listen(port, hostname, console.log('Servidor rodando...'));