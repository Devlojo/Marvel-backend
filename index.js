const express = require("express");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const comicRoutes = require("./routes/comic");
const characterRoutes = require("./routes/character");

app.use(comicRoutes);
app.use(characterRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exists" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server started");
});
