const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

// Models
const Product = require('../models/Product');
const Group = require('../models/Group');

// Start the connections
Product.init(connection);
Group.init(connection);

module.exports = connection;