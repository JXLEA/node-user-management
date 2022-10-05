const express = require('express'),
    router = express.Router(),
    userRoutes = require('./userRoutes')

router.use('/users', userRoutes)
//router.use('/notes', noteRoutes)

module.exports = router