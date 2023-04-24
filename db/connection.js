const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://localhost:27017/superheroes", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
}

module.exports = { connect };
