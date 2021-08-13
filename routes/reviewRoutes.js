/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

router
  .route('/')
  .get(reviewController.getAllReivews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

module.exports = router;
