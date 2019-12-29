const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll(
      { attributes: { exclude: ['password'] } }
    );

    return res.json(users);
  },
};