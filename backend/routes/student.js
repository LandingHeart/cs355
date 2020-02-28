const express = require("express");

const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = "mynameis";
const Student = require("../models/Student");

router.get("/users", async (req, res) => {
  try {
    const students = await Customer.find();
    res.json(students);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:studentId", async (req, res) => {
  try {
    const students = await Student.findById(req.params.customerId);
    res.json(students);
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/api/register", async (req, res) => {
  const { id, email, firstname, lastname, username, password } = req.body;

  const customer = new Customer({
    id,
    email,
    firstname,
    lastname,
    username,
    password
  });
  console.log(customer);
  try {
    const saveCustomer = await customer.save();
    console.log("Aaa");
    res.json(saveCustomer);
  } catch (err) {
    console.log("err");
    res.json({ message: err });
  }
});

//check username password in database
router.post("/api/auth", async (req, res) => {
  const { username, password } = req.body;

  Customer.findOne({ username }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: "internal failure"
      });
    } else if (!user) {
      console.log("sever err");
      res.status(401).json({
        error: "Incorrect email or password"
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again"
          });
        } else if (!same) {
          console.log("401");
          res.status(401).json({
            error: "Incorrect email or password"
          });
        } else {
          // Issue token
          const payload = { username };
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h"
          });
          // res.cookie("token", token, { httpOnly: true }).sendStatus(200);
          res.status(200).json(user);
        }
      });
    }
  });
});

router.delete("/:customerId", async (req, res) => {
  try {
    const removeCustomers = await Customer.remove({
      _id: req.params.customerId
    });
    res.json(removeCustomers);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
