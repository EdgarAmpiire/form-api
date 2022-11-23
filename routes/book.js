const express = require('express')

const router = express.Router()

// GET all bookings
router.get('/', (req, res) => {
    res.json({msg: "Get all bookings"})
})

// GET a single booking


// POST a booking


// DELETE a booking


// UPDATE a booking



module.exports = router