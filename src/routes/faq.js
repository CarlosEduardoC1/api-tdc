const express = require('express');
const routes = express.Router();
const controller = require('../controller/faq');

routes.get('/get-messages/:user/:processo', controller.salva);
routes.post('/set-message', controller.lista);

module.exports = routes;
