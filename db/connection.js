const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.DB_URL || "mongodb://localhost:27017/superheroes";

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

  mongoose
    .connect(MONGODB_URI, mongooseConfig)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

mongoose.connection.on("disconnected", () => console.log("Disconnected"));
mongoose.connection.on("error", (error) => console.error(`${error}`));

module.exports = mongoose;
