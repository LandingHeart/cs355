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
  console.log();
});

router.get("/:questionID", async (req, res) => {
  try {
    const questionID = Questions.findById(req.params.questionID);
    res.json(questionID);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/register", async (req, res) => {
  const question = new Questions({
    title: req.body.title,
    a: req.body.a,
    b: req.body.b,
    c: req.body.c,
    d: req.body.d,
    ans: req.body.ans,
    id: req.body.id
  });
  try {
    const saveQuestion = await question.save();
    res.json(saveQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
