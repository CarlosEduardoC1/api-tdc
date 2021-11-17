const express = require('express');
const routes = express.Router();
const controller = require('../controller/processos');

routes.post('/create/process', controller.salva);
routes.get('/get/:id', controller.lista);
routes.post('/update-process-file', controller.updt);
routes.delete('/drop-process/:id_process/:id', controller.deleta);

module.exports = routes;
