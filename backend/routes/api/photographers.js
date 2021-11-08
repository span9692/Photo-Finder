const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Photographer } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validatePhotographer = [
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please enter your First Name.'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please enter your Last Name.'),
    check('profilePic')
        .exists({ checkFalsy: true })
        .withMessage('Please submit a Profile Picture.'),
    check('biography')
        .exists({ checkFalsy: true })
        .withMessage('Please tell us about yourself.'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please enter your City.'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please enter your State.'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Please enter your Rate.'),
    handleValidationErrors,
];



// grabbing photographers from our photos database
router.get('/', asyncHandler(async (req, res) => {
    const photographers = await Photographer.findAll()
    res.json(photographers);
}))

// post a new photographer
router.post('/', validatePhotographer, asyncHandler(async (req, res) => {
    const newPhotographer = await Photographer.create(req.body)
    res.json(newPhotographer)
}))

module.exports = router;
