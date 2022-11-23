const Bookings = require('../models/bookingsModel')

// POST a booking
const createBooking = async (req, res) => {
    const {firstName, lastName, email, phoneNumber, occupation} = req.body

    //add doc to db
    try {
        const booking = await Bookings.create({firstName, lastName, email, phoneNumber, occupation})
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}