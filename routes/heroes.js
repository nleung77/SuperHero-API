const express = require('express');
const {
  getAllHeroes,
  getHeroById,
  createHero,
  updateHero,
  deleteHero
} = require('../controllers/heroes');

const router = express.Router();

router.get('/', getAllHeroes);
router.get('/:id', getHeroById);
router.post('/', createHero);
router.put('/:id', updateHero);
router.delete('/:id', deleteHero);

module.exports = router;
