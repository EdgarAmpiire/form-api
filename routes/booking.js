const express = require("express");
const Bookings = require("../models/bookingsModel");

const router = express.Router();

// GET all bookings
router.get("/", (req, res) => {
  res.json({ msg: "Get all bookings" });
});

// GET a single booking
router.get("/:id", (req, res) => {
  res.json({ msg: "Get a single booking" });
});

// POST a booking
router.post("/", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, occupation } = req.body;

  // add to db
  try {
    const booking = await Bookings.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      occupation,
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
 
// DELETE a booking
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a booking" });
});

// UPDATE a booking
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a booking" });
});

module.exports = router;
