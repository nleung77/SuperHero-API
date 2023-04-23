const mongoose = require("mongoose");
const Hero = require("../models/hero");
const data = require("./data");

mongoose
  .connect("mongodb://localhost/superheroes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    Hero.insertMany(data)
      .then(() => {
        console.log("Data seeded");
        mongoose.connection.close();
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
