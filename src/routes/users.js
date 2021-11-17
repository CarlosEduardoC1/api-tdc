const express = require('express');
const routes = express.Router();
const controller = require('../controller/users');

routes.post('/', controller.salva);
routes.post('/verificaemail', controller.getMail);
routes.get('/get-my/data/:id', controller.lista);
routes.post('/update-data/:id', controller.updt);
routes.delete('/:id', controller.deleta);

module.exports = routes;
