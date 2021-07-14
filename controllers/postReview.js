const Review = require("../models/review.model");

module.exports = {
  createReview: async (req, res) => {
    try {
      const { review, ratings, username, carname } = req.body;
      if (!review || !ratings || !username || !carname) {
        return res.json({
          status: false,
          message: "unable to make reviews",
        });
      }
      const reviews = new Review({
        ...req.body,
      });
      const isSaved = await reviews.save();
      if (!isSaved) {
        return res.json({ status: false, mesaage: "unable to save reviews" });
      }
      res.json({ status: true });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  },

  fetchReviews: async (req, res) => {
    try {
      const reviews = await Review.find({});
      if (!reviews || reviews.length == 0) {
        return res.json({ status: false, message: "unable to fetch reviews" });
      }
      res.json({ reviews });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  },
  fetchReview: async (req, res) => {
    const reviewId = req.query.reviewId;
    try {
      const review = await Review.findOne({ _id: reviewId });
      if (!review) {
        return res.json({
          status: false,
          message: `unable to fetch review ${req.query.reviewId}`,
        });
      }
      res.json({ review });
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  },

  deleteReview: async (req, res) => {
    try {
      const isDeleted = await Review.findOneAndDelete({ _id: req.params.id });
      if (!isDeleted) {
        res.send("unable to delete");
      }
    } catch (error) {
      res.json({
        status: false,
        message: error.message,
      });
    }
  },
};
