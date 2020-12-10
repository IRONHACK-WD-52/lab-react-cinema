const express = require("express");
const router = express.Router();

const movies = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res) => {
  console.log("called");
  res.json({ message: "index" });
});
router.get("/api/movies", async (req, res) => {
  try {
    const response = await movies.find();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});
// Get movie details

router.get("/api/movies/:id", async (req, res) => {
  try {
    const response = await movies.findOne({ _id: req.params.id });
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

router.post("/api/movies/new", async (req, res) => {
  try {
    const { showtimes, stars } = req.body;
    const showtime = showtimes.split(",");
    const star = stars.split(",");

    const response = await movies.create({
      ...req.body,
      showtimes: showtime,
      stars: star,
    });
    return res.status(201).json(response);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
