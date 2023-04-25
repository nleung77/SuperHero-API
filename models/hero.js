const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  name: String,
  powerstats: {
    intelligence: Number,
    strength: Number,
    speed: Number,
    durability: Number,
    power: Number,
    combat: Number,
  },
  biography: {
    full_name: String,
    alter_egos: String,
    aliases: [String],
    place_of_birth: String,
    first_appearance: String,
    publisher: String,
    alignment: String,
  },
  appearance: {
    gender: String,
    race: String,
    height: {
      ft: String,
      cm: String,
    },
    weight: {
      lb: String,
      kg: String,
    },
    eye_color: String,
    hair_color: String,
  },
  work: {
    occupation: String,
    base: String,
  },
  connections: {
    group_affiliation: String,
    relatives: String,
  },
  image: {
    url: String,
  },
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
