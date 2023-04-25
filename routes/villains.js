const express = require("express");

const {
  getAllVillains,
  getVillain,
  createVillain,
  updateVillain,
  deleteVillain,
} = require("../controllers/villains");

const router = express.Router();

router.get("/", getAllVillains);
router.get("/:id", getVillain);
router.post("/", createVillain);
router.put("/:id", updateVillain);
router.delete("/:id", deleteVillain);

module.exports = router;

