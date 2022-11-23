const express = require("express")
require("dotenv").config()

//express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get("/", (req, res) => {
    res.json({msg: "Welcome to the app!"})
})

// listening to request
app.listen(process.env.PORT, () => {
    console.log("listening to port:", process.env.PORT)
})