'use strict';

const express = require('express');

const routes = express.Router();

// Controllers
const ProductController = require('./controllers/ProductController');

// Routes
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.delete('/products/:id', ProductController.destroy);
routes.put('/products/:id', ProductController.update);


module.exports = routes;