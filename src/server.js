'use strict';

const express = require('express');
const http = require('http');

require('./database');

const routes = require('./routes');

const app = express();
const port = 3333;

const server = http.Server(app);

app.use(express.json());
app.use(routes);

server.listen(port);
console.log(`The server is running on port ${port}`);