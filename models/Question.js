const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  a: {
    type: String,
    require: true
  },
  b: {
    type: String,
    require: true
  },
  c: {
    type: String,
    require: true
  },
  d: {
    type: String,
    require: true
  },
  ans: {
    type: String,
    require: true
  },
  id: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model("questions", QuestionSchema);
