const express = require('express');
const {
  getAllHeroes,
  getHero,
  createHero,
  updateHero,
  deleteHero
} = require('../controllers/heroes');

const router = express.Router();

router.get('/', getAllHeroes);
router.get('/:id', getHero);
router.post('/', createHero);
router.put('/:id', updateHero);
router.delete('/:id', deleteHero);

module.exports = router;
