const router = require('express').Router()

// connect your API routes here!
router.use('/employees', require('./employees'));
router.use('/departments', require('./departments'));


module.exports = router