const { Model, DataTypes } = require('sequelize');

class Group extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }
}

module.exports = Group;