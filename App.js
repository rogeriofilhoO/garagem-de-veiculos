// Importando a biblioteca Express
const express = require('express');

// Importando as rotas
const veiculosRotas = require('./routes/veiculos');
const clientesRotas = require('./routes/clientes');

// Colocando o express na constante 'app'
const app = express();

// Configurando o servidor
const port = 8080; 
const hostname = '127.0.0.1';

// Configuração da rota da raiz
app.get('/', (req, res) => {
    res.send("Você está na rota raíz!");
});

/* Configurando as rotas (get, put, delete, post)
de 'clientes' e 'veículos' */
app.use('/clientes', clientesRotas);
app.use('/veiculos', veiculosRotas);

//Fazendo o servidor funcionar
app.listen(port, hostname, console.log(`O servidor está rodando! \nAcesse: http://${hostname}:${port}/`));