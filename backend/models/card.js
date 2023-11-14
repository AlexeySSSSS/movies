const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    minlength: 1,
  },
  text: {
    type: String,
    required: true,
    minlength: 2,
  },
  time: {
    type: String,
    required: true,
    minlength: 2,
  },
  link: {
    type: String,
    required: true,
    minlength: 2,
  },
  img: {
    type: String,
    required: true,
    minlength: 2,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("card", cardSchema);
