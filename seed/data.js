const axios = require("axios");
const mongoose = require("mongoose");
const Hero = require("../models/hero");
const Villain = require("../models/villain");
const fs = require("fs");

const apiUrl = "https://superheroapi.com/api/10200089863473321";
const MONGODB_URI =
  process.env.DB_URL || "mongodb://localhost:27017/superheroes";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const seedDatabase = async () => {
  const heroData = await getData(`${apiUrl}/search/a`);
  const villainData = await getData(`${apiUrl}/search/b`);

  console.log("hero Data: ", heroData.results[0]);

  const heroes = heroData.results.map((result) => ({
    name: result.name,
    image: result.image.url,
    biography: result.biography,
    appearance: result.appearance,
    powerstats: result.powerstats,
  }));

  const villains = villainData.results.map((result) => ({
    name: result.name,
    image: result.image.url,
    biography: result.biography,
    appearance: result.appearance,
    powerstats: result.powerstats,
  }));

  try {
    await Hero.insertMany(heroes);
    console.log("Heroes seeded");
    await Villain.insertMany(villains);
    console.log("Villains seeded");
  } catch (error) {
    console.error(error);
  }

  // fs.writeFile("heroes.json", JSON.stringify(heroes), (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("yee");
  //   }
  // });

  // fs.writeFile("villains.json", JSON.stringify(villains), (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("yee");
  //   }
  // });

  mongoose.connection.close();
};

seedDatabase();
