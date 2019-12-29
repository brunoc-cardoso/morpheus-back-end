'use strict';

const express = require('express');

const auth = require('./middlewares/auth');
const routes = express.Router();

// Controllers
const ProductController = require('./controllers/ProductController');
const GroupController = require('./controllers/GroupController');
const ProfileController = require('./controllers/ProfileController');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

// Routes
// Products
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.delete('/products/:id', ProductController.destroy);
routes.put('/products/:id', ProductController.update);

// Products Groups
routes.get('/groups', GroupController.index);
routes.post('/groups', GroupController.store);
routes.delete('/groups/:id', GroupController.destroy);
routes.put('/groups/:id', GroupController.update);

// Profiles
routes.get('/users/profiles', auth.isAuthorized, ProfileController.index);
routes.post('/users/profiles', auth.isAuthorized, ProfileController.store);
routes.put('/users/profiles/:id',auth.isAuthorized, ProfileController.update);
routes.delete('/users/profiles/:id',auth.isAuthorized, ProfileController.destroy);

// User
routes.get('/users', UserController.index);
// routes.post('/users', UserController.store);
// routes.delete('/users', UserController.update);
// routes.put('/users', UserController.destroy);

// User Auth
routes.post('/users/authentication/regiter', AuthController.register); // no need to check token
routes.post('/users/authentication/login', AuthController.authenticate); // no need to check token
routes.post('/users/authentication/resetpassword', AuthController.resetPassword); // no need to check token


module.exports = routes;