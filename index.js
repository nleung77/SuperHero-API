const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/connection.js");

const heroesRouter = require("./routes/heroes");
const villainsRouter = require("./routes/villains");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/heroes", heroesRouter);
app.use("/api/villains", villainsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

