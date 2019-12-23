const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

router.post('/authenticate', async (req, res) => {
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

});

module.exports = app => app.use('/users/authentication', router);
