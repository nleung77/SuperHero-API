const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  name: { type: String, required: true },
  intelligence: Number,
  strength: Number,
  speed: Number,
  durability: Number,
  power: Number,
  combat: Number,
  gender: String,
  race: String,
  height: {
    feet: Number,
    inches: Number,
  },
  weight: {
    pounds: Number,
  },
  alignment: String,
  publisher: String,
  imageUrl: String,
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;

