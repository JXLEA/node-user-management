const express = require('express')
const routes = require('./user.routes')

const router = express.Router()

router.use('/users', routes)

module.exports = router
