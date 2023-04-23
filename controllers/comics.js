const Comic = require("../models/comic");

async function getAllComics(req, res) {
  try {
    const comics = await Comic.find();
    res.json(comics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getComicById(req, res) {
  try {
    const comic = await Comic.findById(req.params.id);
    if (!comic) {
      return res.status(404).json({ message: "Comic not found" });
    }
    res.json(comic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createComic(req, res) {
  try {
    const comic = await Comic.create(req.body);
    res.status(201).json(comic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateComic(req, res) {
  try {
    const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!comic) {
      return res.status(404).json({ message: "Comic not found" });
    }
    res.json(comic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteComic(req, res) {
  try {
    const comic = await Comic.findByIdAndDelete(req.params.id);
    if (!comic) {
      return res.status(404).json({ message: "Comic not found" });
    }
    res.json(comic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllComics,
  getComicById,
  createComic,
  updateComic,
  deleteComic,
};
