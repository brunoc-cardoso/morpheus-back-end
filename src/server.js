'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

require('./database');
const routes = require('./routes');

const app = express();
const port = 3333;

const server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
// TEST
// require('./controllers/AuthController')(app);
// require('./controllers/ProfileController')(app);

server.listen(port);
console.log(`The server is running on port ${port}`);