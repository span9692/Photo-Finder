const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Review, User, Photographer } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// grabbing photos from our photos database
router.get('/', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({ include: [User, Photographer] })
    res.json(reviews);
}))

router.post('/', asyncHandler(async (req, res) => {
    const { userId, photographerId, review } = req.body;

    const newReview = {
        userId, photographerId, review
    }

    const createdReview = await Review.create(newReview)
    res.json(createdReview)
}))

router.delete('/:reviewId', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.reviewId, 10)

    const review = await Review.findByPk(id);
    await review.destroy();
    
    res.json({ message: 'Review deleted' })
}))

module.exports = router;
