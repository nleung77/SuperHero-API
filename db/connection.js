const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGO_URL || "mongodb://localhost:27017/superheroes";

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

function connect() {
  mongoose
    .connect(MONGODB_URI, mongooseConfig)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
}

module.exports = { connect };
