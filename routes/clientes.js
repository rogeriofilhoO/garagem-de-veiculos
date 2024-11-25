// Importando a biblioteca express 
const express = require('express');

// Constanto para manipulação de rotas
const rotas = express.Router();

// Rota com método GET
rotas.get('/', (req, res) => {
    res.send("[SUCESSO]: Os dados do cliente foram consultados.");
});

// Rota com método POST
rotas.post('/', (req, res) => {
    res.send("[SUCESSO]: Os dados do cliente foram adicionados.");
});

// Rota com método PUT
rotas.put('/', (req, res) => {
    res.send("[SUCESSO]: Os dados do cliente foram atualizados.");
});

// Rota com método DELETE
rotas.delete('/', (req, res) => {
    res.send("[SUCESSO]: Os dados do cliente foram excluídos.")
});

// Exportando o módulo rotas
module.exports = rotas;