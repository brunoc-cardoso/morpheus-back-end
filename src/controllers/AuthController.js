const User = require('../models/User');
const Profile = require('../models/Profile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async register(req, res) {
    const { name, username, email, password, birth, profile_id } = req.body;

    const hashPasword = await bcrypt.hash(password, 10);

    if (!await Profile.findByPk(profile_id))
      return res.status(400).json({ message: 'Invalid profile entered, registration not completed.' })

    const user = await User.create({ name, username, email, password: hashPasword, birth, profile_id });

    user.password = undefined;

    return res.json({
      user,
      token: generateToken({ id: user.id })
    });
  },

  async authenticate(req, res) {
    const { username, password } = req.body;
  
    const user = await User.findOne({
      where: { username },
    });
  
    if (!user)
      return res.status(400).send({ error: 'User not found '});
  
    if (!await bcrypt.compareSync(password, user.password))
      return res.status(400).send({ error: 'Invalid password' });
  
    user.password = undefined;
  
    return res.send({
      user,
      token: generateToken({ id: user.id }),
    });
  },

  async resetPassword(req, res) {
    // TODO Reset Password process
  }
}
