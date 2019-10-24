const Product = require('../models/Product');

module.exports = {
  async index(req, res) {
    const products = await Product.findAll();

    return res.status(200).json(products);
  },

  async store(req, res) {
    const { name, description, buyValue, saleValue, isBonus, quantityStock } = req.body;

    const product = await Product.create({ name, description, buyValue, saleValue, isBonus, quantityStock });

    return res.status(201).json(product);
  },

  async destroy(req, res) {
    const { id } = req.params;

    await Product.destroy({
      where: { id }
    })

    return res.status(200).json({ message: 'Product deleted successfully' })
  },

  async update(req, res) {
    const { id } = req.params;
    const updates = req.body;
    
    const product = await Product.update(updates, { where: { id } });

    return res.status(200).json({ message: 'Product updated successfully' });
  }
}