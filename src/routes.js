const express = require('express');

const UsersController = require('./controllers/UsersController');

const routes = express.Router();


routes.get('/cadastro', UsersController.index);
routes.post('/cadastro', UsersController.create);
routes.post('/cadastro/update', UsersController.update);
routes.delete('/cadastro/delete', UsersController.deleteall);
routes.delete('/cadastro/delete/:id', UsersController.delete);

module.exports = routes;