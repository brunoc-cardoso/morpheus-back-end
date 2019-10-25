const Product = require('../models/Product');

module.exports = {
  async index(req, res) {
    const products = await Product.findAll();

    return res.status(200).json(products);
  },

  async store(req, res) {
    const { name, description, buyValue, saleValue, isBonus, quantityStock, group_id } = req.body;

    const product = await Product.create({ name, description, buyValue, saleValue, isBonus, quantityStock, group_id });

    return res.status(201).json(product);
  },

  async destroy(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(400).json({ message: 'Unregistered product' });
    }

    await Product.destroy({
      where: { id }
    })

    return res.status(200).json({ message: 'Product deleted successfully' })
  },

  async update(req, res) {
    const { id } = req.params;
    const updates = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(400).json({ message: 'Unregistered product' });
    }
    
    await Product.update(updates, { where: { id } });

    return res.status(200).json({ message: 'Product updated successfully' });
  }
}