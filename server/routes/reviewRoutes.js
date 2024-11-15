const express = require('express');
const { addReview, getReviews } = require('../controller/reviewController');
const roleCheck = require('../middleware/roleCheck');  // Import the roleCheck middleware
const errorHandler = require('../middleware/errorHandler');

const router = express.Router();

// Routes for managing reviews, with the roleCheck middleware applied
router.post('/:collegeId/:id/addReview', roleCheck, addReview);  
router.get('/:collegeId/getReviews', roleCheck, getReviews); 

// Error handler middleware (applies to all routes below it)
router.use(errorHandler);

module.exports = router;
