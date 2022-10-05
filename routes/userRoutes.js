const express = require('express'),
    router = express.Router(),
    UserController = require('../controller/userController')

const userController = new UserController()

router.use(express.json())
router.route('/')
    .get(userController.getAll)
    .post(userController.create)
    .put(userController.update)
    .delete(userController.delete)

router.route('/:id')
    .get(userController.getById)

module.exports = router