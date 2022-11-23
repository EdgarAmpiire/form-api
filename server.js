const express = require("express")

//express app
const app = express()

// listening to request
app.listen(4000, () => {
    console.log("listening to port 4000")
})