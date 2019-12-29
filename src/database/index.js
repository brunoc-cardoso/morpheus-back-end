const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

// Models
const Product = require('../models/Product');
const Group = require('../models/Group');
const Profile = require('../models/Profile');
const User = require('../models/User');

// Start the connections
Product.init(connection);
Group.init(connection);
Profile.init(connection);
User.init(connection);

Product.associate(connection.models);
User.associate(connection.models);

module.exports = connection;