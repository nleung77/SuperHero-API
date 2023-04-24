const express = require("express");
const {
  getAllVillains,
  getVillainById,
  createVillain,
  updateVillain,
  deleteVillain,
} = require("../controllers/villains");

const router = express.Router();

router.get("/", getAllVillains);
router.get("/:id", getVillainById);
router.post("/", createVillain);
router.put("/:id", updateVillain);
router.delete("/:id", deleteVillain);

module.exports = router;
