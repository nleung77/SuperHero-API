const Villain = require("../models/villain");

// Create a new villain
async function createVillain(req, res){
  try {
    const villain = new Villain(req.body);
    await villain.save();
    res
      .status(201)
      .json({ message: "Villain created successfully", data: villain });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating villain", error: error.message });
  }
};

// Get all villains
async function getAllVillains(req, res){
  try {
    const villains = await Villain.find();
    res.status(200).json({ data: villains });
  } catch (error) {
    res
      .status(404)
      .json({ message: "No villains found", error: error.message });
  }
};

// Get a single villain
async function getVillain(req, res){
  try {
    const villain = await Villain.findById(req.params.id);
    if (!villain) {
      throw new Error("Villain not found");
    }
    res.status(200).json({ data: villain });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Villain not found", error: error.message });
  }
};

// Update a villain
async function updateVillain(req, res){
  try {
    const villain = await Villain.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Villain updated successfully", data: villain });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating villain", error: error.message });
  }
};

// Delete a villain
async function deleteVillain(req, res){
  try {
    const villain = await Villain.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "Villain deleted successfully", data: villain });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error deleting villain", error: error.message });
  }
};

module.exports = {
  getAllVillains,
  getVillain,
  createVillain,
  updateVillain,
  deleteVillain,
};
