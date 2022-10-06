const express = require('express'),
    router = express.Router(),
    UserController = require('../controller/userController')

const userController = new UserController()

router.use(express.json())
router.route('/')
    .get(userController.getAll)
    .post(userController.create)
    .put(userController.update)

router.route('/:id')
    .get(userController.getById)
    .delete(userController.delete)

module.exports = router