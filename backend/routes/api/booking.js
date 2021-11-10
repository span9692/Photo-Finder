const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Appointment } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// grabbing photos from our photos database
router.post('/', asyncHandler(async(req, res) => {
    const {userId, photographerId, date, hours} = req.body;

    const newAppointment = {
        userId, photographerId, date, hours
    }

    const appointment = await Appointment.create(newAppointment)
    res.json(appointment);
}))

module.exports = router;
