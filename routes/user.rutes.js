const express = require('express'),
    router = express.Router(),
    UserController = require('../controller/userController')

const userController = new UserController()

router.route('/')
    .get(userController.getAll)
    .post(userController.create)
    .put(userController.update)
    .delete(userController.delete)

module.exports = router