const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    courseid: {
        type: Number,
        required: true
    },
    coursename:{
        type: String,
        required: true
    }

})


module.exports = mongoose.model("courses", CourseSchema);
