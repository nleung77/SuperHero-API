const express = require("express");
const router = express.Router();
const villainController = require("../controllers/villainController");

router
  .route("/")
  .get(villainController.getVillains)
  .post(villainController.createVillain);

router
  .route("/:id")
  .get(villainController.getVillainById)
  .put(villainController.updateVillain)
  .delete(villainController.deleteVillain);

module.exports = router;
