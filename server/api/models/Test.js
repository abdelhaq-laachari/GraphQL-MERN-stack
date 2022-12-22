const mongoose = require("mongoose");

const testSchema = mongoose.Schema(
  {
    IPR: {
      type: String,
      required: [true, "Please enter your full name"],
    },
    Designation: {
      type: String,
      required: [true, "Please enter your Address"],
    },
    Status: {
      type: String,
      required: [true, "Please enter your City"],
    },
    Number: {
      type: Number,
      required: [true, "Please enter your zip code"],
    },
    Office: {
      type: String,
      required: [true, "Please enter your Country"],
    },
    Owner: {
      type: String,
      required: [true, "Please enter your phoneNumber"],
    },
    Brand_name: {
      type: String,
      required: [true, "Please enter your email"],
    },
    Nice_classification: {
      type: String,
      required: [true, "Please enter your email"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Test", testSchema);
