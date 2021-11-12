const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Photo } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// grabbing photos from our photos database
router.get('/', asyncHandler(async(req, res) => {
    const photos = await Photo.findAll()
    res.json(photos);
}))

router.post('/', asyncHandler(async(req, res) => {
    const { portfolioId, url, type } = req.body;
    const newPic = {
        portfolioId, url, type
    }
    const photo = await Photo.create(newPic)
    res.json(photo)
}))

module.exports = router;
