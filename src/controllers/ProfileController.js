const Profile = require('../models/Profile');
const express = require('express');
const router = express.Router();

module.exports = {
  async index(req, res) {
    const profiles = await Profile.findAll();

    return res.json(profiles);
  },

  async store(req, res) {
    const { name, description } = req.body;
    const profile = await Profile.create({ name, description });

    return res.json(profile);
  },

  async destroy(req, res) {
    const { id } = req.params;
    await Profile.destroy();

    return res.json({ message: 'Profile deleted' });
  },
  
  async update(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;

    const profile = await profile.update({ name, description }, {
      where: { id: id}
    });

    return res.json({ message: 'Profile updated', profile });
  }
};
