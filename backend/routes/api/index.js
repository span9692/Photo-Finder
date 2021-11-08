const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const photoRouter = require('./photos.js')
const photographerRouter = require('./photographers')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/photos', photoRouter);
router.use('/photographers', photographerRouter)

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
