const express = require("express");
require("dotenv").config();
const axios = require("axios");
const router = express.Router();
router.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );
    console.log(response.data.results);

    res.json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
