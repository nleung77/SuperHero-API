const mongoose = require("mongoose");

const villainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  realName: String,
  powers: [String],
  archEnemy: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Villain", villainSchema);
