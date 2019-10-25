'use strict';

const express = require('express');

const routes = express.Router();

// Controllers
const ProductController = require('./controllers/ProductController');
const GroupController = require('./controllers/GroupController');

// Routes
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.delete('/products/:id', ProductController.destroy);
routes.put('/products/:id', ProductController.update);

routes.get('/groups', GroupController.index);
routes.post('/groups', GroupController.store);
routes.delete('/groups/:id', GroupController.destroy);
routes.put('/groups/:id', GroupController.update);


module.exports = routes;