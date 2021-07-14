const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
  ratings: {
    type: Number,
    max: 6,
  },
  review: String,
  username: String,
  carName: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("reviews", ReviewSchema);
module.exports = Review;
