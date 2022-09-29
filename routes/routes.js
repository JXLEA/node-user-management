const express = require('express'),
    router = express.Router(),
    userRoutes = require('./user.rutes')

router.use('/users', userRoutes)

module.exports = router