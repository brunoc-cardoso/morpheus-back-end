const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      buyValue: DataTypes.DOUBLE,
      saleValue: DataTypes.DOUBLE,
      isBonus: DataTypes.BOOLEAN,
      isActive: DataTypes.BOOLEAN,
      minimumStock: DataTypes.INTEGER,
      quantityStock: DataTypes.INTEGER,
      isNotifiable: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }
}

module.exports = Product;