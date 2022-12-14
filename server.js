const express = require("express");
require("dotenv").config();
const bookingRoutes = require("./routes/booking");
const mongoose = require("mongoose");

//express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);  
  next();
});

// routes
app.use("/api/bookings", bookingRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening to request
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB \nlistening to port:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
