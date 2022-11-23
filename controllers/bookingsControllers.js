const Bookings = require("../models/bookingsModel");

// GET all bookings
const getBookings = async (req, res) => {
    const bookings = await Bookings.find().sort({createdAt: -1})

    if(!bookings.length === 0) {
        res.status(404).json({error: "There are no bookings yet."})
    }

    res.status(200).json(bookings)

}

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


module.exports = {getBookings, createBooking}