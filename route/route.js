const express = require("express");
const router = express.Router();
const {
  createReview,
  fetchReview,
  fetchReviews,
} = require("../controllers/postReview");
router.post("/createReview", createReview);
router.get("/fetchReview", fetchReview);
router.get("/fetchReviews", fetchReviews);
// router.post("/deleteReview", deleteReview);

module.exports = router;
