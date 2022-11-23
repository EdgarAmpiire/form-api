const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },

}, {timestamps: true})

module.exports = mongoose.model('Bookings', bookingSchema)