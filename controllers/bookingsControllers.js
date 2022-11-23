const { mongoose } = require("mongoose");
const Bookings = require("../models/bookingsModel");

// GET all bookings
const getBookings = async (req, res) => {
  const bookings = await Bookings.find().sort({ createdAt: -1 });

  if (!bookings.length === 0) {
    res.status(404).json({ error: "There are no bookings yet." });
  }

  res.status(200).json(bookings);
};

// GET a single booking
const getBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Booking doesn't exist." });
  }

  const booking = await Bookings.findById(id);

  if (!booking) {
    res.status(400).json({ error: "Booking doesn't exist." });
  }

  res.status(200).json(booking);
};

// POST a booking
const createBooking = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, occupation } = req.body;

  //add doc to db
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
    res.status(404).json({ error: error.message });
  }
};

// DELETE a booking
const deleteBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Booking doesn't exist." });
  }

  const booking = await Bookings.findOneAndDelete({ _id: id });

  if (!booking) {
    res.status(400).json({ error: "Booking doesn't exist." });
  }

  res.status(200).json(booking);
};

// UPDATE a booking
const updateBooking = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({ error: "Booking doesn't exist." });
    }

    
}

module.exports = { getBookings, getBooking, createBooking, deleteBooking };
