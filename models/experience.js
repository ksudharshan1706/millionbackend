const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  period: {
    type: String,
    required: true,
  },

  project: {
    type: String,
    required: true,
  },

  projectdesc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Experience", ExperienceSchema);
