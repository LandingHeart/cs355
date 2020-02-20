const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  choiceA: {
    type: String,
    require: true
  },
  choiceB: {
    type: String,
    require: true
  },
  choiceC: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("questions", QuestionSchema);
