const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
  years: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },

  marks: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Education", EducationSchema);
