const express = require("express");

const router = express.Router();

const Course = require("../models/Course");

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.json({ message: error });
  }
  console.log();
});

router.get("/:courseID", async (req, res) => {
  try {
    const courseid = Questions.findById(req.params.courseID);
    res.json(courseid);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
