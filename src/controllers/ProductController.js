const Product = require('../models/Product');

module.exports = {
  async index(req, res) {
    const products = await Product.findAll();

    return res.status(200).json(products);
  },

  async store(req, res) {
    const { name, description, buyValue, saleValue, isBonus, quantityStock } = req.body;

    const product = await Product.create({ name, description, buyValue, saleValue, isBonus, quantityStock });

    return res.status(200).json(product);
  }
}