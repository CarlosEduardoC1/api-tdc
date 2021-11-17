const express = require('express');
const routes = express.Router();
const controller = require('../controller/files');

routes.get('/', controller.salva);
routes.get('/get-names/:user/:processo', controller.lista);
routes.post('/delete-files', controller.lista);

module.exports = routes;
