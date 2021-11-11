/* eslint-disable */
const express = require('express');
const authController = require('../controllers/authController');
const tourController = require('../controllers/tourController');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', authController.isLoggedIn, tourController.getAllTours);

router.get(
  '/tour/:slug',
  authController.isLoggedIn,
  authController.protect,
  tourController.getTour
);

router.get('/login', authController.isLoggedIn);

router.get('/me', authController.protect, userController.getMe);

module.exports = router;
