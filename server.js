const express = require("express")

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
app.listen(4000, () => {
    console.log("listening to port 4000")
})