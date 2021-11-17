const express = require('express');
const routes = express.Router();
const http = require('http');
const controller = require('../controller/auth');

routes.post('/', controller.post);

module.exports = routes;
