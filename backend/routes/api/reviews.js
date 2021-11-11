const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Review, User, Photographer } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// grabbing photos from our photos database
router.get('/', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll()
    res.json(reviews);
}))

module.exports = router;
