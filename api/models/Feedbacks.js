const mongoose = require("mongoose");

const FeedbacksSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    genre: { type: String },
    year:{type:Array}
  },
  { timestamps: true }
);

module.exports = mongoose.model("feedbacks", FeedbacksSchema);