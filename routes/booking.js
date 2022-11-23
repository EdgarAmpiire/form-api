const express = require('express')
const Bookings = require('../models/bookingsModel')

const router = express.Router()

// GET all bookings
router.get('/', (req, res) => {
    res.json({msg: "Get all bookings"})
})

// GET a single booking
router.get('/:id', (req, res) => {
    res.json({msg: "Get a single booking"})
})

// POST a booking
router.post('/', (req, res) => {
    const {firstName, lastName, email, phoneNumber, occupation} = req.body
    res.json({msg: "Add a booking"})
})

// DELETE a booking
router.delete('/:id', (req, res) => {
    res.json({msg: "Delete a booking"})
})

// UPDATE a booking
router.patch('/:id', (req, res) => {
    res.json({msg: "Update a booking"})
})


module.exports = router