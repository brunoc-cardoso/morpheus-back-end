const Group = require('../models/Group');

module.exports = {
  async index(req, res) {
    const groups = await Group.findAll();

    return res.status(200).json(groups);
  },

  async store(req, res) {
    const { name, description } = req.body;

    const group = await Group.create({ name, description });

    return res.status(201).json({ message: 'Group successfully registered' });
  },

  async destroy(req, res) {
    const { id } = req.params;
    
    await Group.destroy({
      where: { id }
    })

    return res.status(200).json({ message: 'Group successfully removed' })
  },

  async update(req, res) {
    const { id } = req.params;
    const updates = req.body;

    await Group.update(updates, { where: { id } });

    return res.status(200).json({ message: 'Group updated successfully' }); 
  }
}