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
      minimunStock: DataTypes.INTEGER,
      quantityStock: DataTypes.INTEGER,
      isNotiable: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }
}

module.exports = Product;