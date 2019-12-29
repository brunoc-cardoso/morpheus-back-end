'use strict';

const { Model, DataTypes } = require('sequelize');

class Profile extends Model  {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      sequelize
    });
  }
}

module.exports = Profile;