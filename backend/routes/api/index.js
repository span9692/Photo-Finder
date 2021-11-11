const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const photoRouter = require('./photos.js')
const photographerRouter = require('./photographers')
const bookingRouter = require('./booking')
const reviewRouter = require('./reviews.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/photos', photoRouter);
router.use('/photographers', photographerRouter)
router.use('/booking', bookingRouter)
router.use('/reviews', reviewRouter)

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
