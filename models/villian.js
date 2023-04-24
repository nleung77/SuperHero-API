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

//const Villn = mongoose.model("Villain", villainSchema);

module.exports = mongoose.model("Villain", villainSchema);
