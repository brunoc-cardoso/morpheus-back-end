'use strict';

const express = require('express');

const routes = express.Router();

// Controllers
const ProductController = require('./controllers/ProductController');

// Routes
routes.post('/product', ProductController.store);


module.exports = routes;