const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const Experience = require("./models/experience.js");
const Education = require("./models/education.js");
const education = require("./models/education.js");

const app = express();
dotenv.config();
const Connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected to DB"))
    .catch(() => console.log("connection error"));
};

app.use(express.json());
app.use(cors());

app.post("/api/auth/education", async (req, res) => {
  console.log(req.body);
  try {
    const newEducation = new Education({
      ...req.body,
    });
    const savedEducation = await newEducation.save();
    res.status(200).json(savedEducation._doc);
  } catch (err) {
    res.status(200).json(err.message);
  }
});

app.get("/api/auth/education", async (req, res) => {
  try {
    const education = await Education.find();
    // console.log(education);
    if (education) {
      console.log(education);
      res.status(200).json(education);
    } else {
      res.status(404);
    }
  } catch (err) {
    next(err);
  }
});
app.get("/api/auth/experience", async (req, res) => {
  try {
    const experience = await Experience.find();
    if (experience) {
      res.status(200).json(experience);
    } else {
      res.status(404);
    }
  } catch (err) {
    next(err);
  }
});

app.post("/api/auth/experience", async (req, res) => {
  console.log(req.body);
  try {
    const newExperience = new Experience({
      ...req.body,
    });
    const savedExperience = await newExperience.save();
    res.status(200).json(savedExperience._doc);
  } catch (err) {
    res.status(200).json(err.message);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  Connect();
  console.log(`connected to Port NO. ${PORT}`);
});
