const express = require("express");
const { createBooking, getBookings, getBooking } = require("../controllers/bookingsControllers");
const Bookings = require("../models/bookingsModel");

const router = express.Router();

// GET all bookings
router.get("/", getBookings);

// GET a single booking
router.get("/:id", getBooking);

// POST a booking
router.post("/", createBooking);
 
// DELETE a booking
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a booking" });
});

// UPDATE a booking
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a booking" });
});

module.exports = router;
