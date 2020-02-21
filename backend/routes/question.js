const express = require("express");

const router = express.Router();

const Questions = require("../models/Question");

router.get("/", async (req, res) => {
  try {
    const questions = await Questions.find();
    res.json(questions);
  } catch (err) {
    res.json({ message: error });
  }
}); 

// router.get("/:bookingId", async (req, res) => {
//   try {
//     const bookings = await Booking.findById(req.params.bookingId);
//     res.json(bookings);
//   } catch (err) {
//     res.json({ message: error });
//   }
// });

// //route to pass in the customerid and find
// // {this.state.customerName}
// router.get("/:customerid", async (req, res) => {
//   try {
//     const customerId = Booking.findById(req.params.customerId);
//     res.json(customerId);
//   } catch (err) {
//     res.json({ msg: err });
//   }
// });

module.exports = router;
