const Hero = require('../models/hero');

async function getAllHeroes(req, res) {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getHero(req, res) {
  try {
    const hero = await Hero.findById(req.params.id);
    if (!hero) {
      return res.status(404).json({ message: 'Hero not found' });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createHero(req, res) {
  try {
    const hero = await Hero.create(req.body);
    res.status(201).json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateHero(req, res) {
  try {
    const hero = await Hero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!hero) {
      return res.status(404).json({ message: 'Hero not found' });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteHero(req, res) {
  try {
    const hero = await Hero.findByIdAndDelete(req.params.id);
    if (!hero) {
      return res.status(404).json({ message: 'Hero not found' });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllHeroes,
  getHero,
  createHero,
  updateHero,
  deleteHero
};
