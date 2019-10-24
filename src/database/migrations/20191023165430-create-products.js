'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      buy_value: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      sale_value: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      is_bonus: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false // By default every item will not be activated after its creation
      },
      minimum_stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5 // When you have less than 5 products in stock by default it will enter the minimum stock report
      },
      quantity_stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      is_notifiable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true // By default every item will have low inventory notification as true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};
