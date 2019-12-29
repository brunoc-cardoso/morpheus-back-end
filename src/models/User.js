'use strict';

const { Model, DataTypes } = require('sequelize');

class User extends Model  {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      birth: DataTypes.DATE,
      isActive: DataTypes.BOOLEAN,
      lastAcess: DataTypes.DATE,
    }, {
      sequelize
    });
  }

  static associate(models){
    this.belongsTo(models.Profile, { foreignKey: 'profile_id', as: 'user_profile' })
  }
}

module.exports = User;