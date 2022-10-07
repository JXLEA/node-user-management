const express = require('express')
const { userController } = require('../controllers')

const router = express.Router()

router.use(express.json())

router.route('/')
    .get(userController.getAll)
    .post(userController.create)
    .put(userController.update)

router.route('/:id')
    .get(userController.getById)
    .delete(userController.delete)

module.exports = router
