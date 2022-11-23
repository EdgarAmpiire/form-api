const express = require("express")
require("dotenv").config()
const bookingRoutes = require('./routes/booking')

//express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/bookings", bookingRoutes)

// listening to request
app.listen(process.env.PORT, () => {
    console.log("listening to port:", process.env.PORT)
})