const express = require("express");
require("dotenv").config();
const axios = require("axios");
const router = express.Router();
router.get("/characters", async (req, res) => {
  try {
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;
    const name = req.query.name || "";

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&limit=${limit}&name${name}&skip=${skip}`
    );
    console.log(response.data.results);

    res.json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.get("/character/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    console.log(response);
    res.json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
module.exports = router;
