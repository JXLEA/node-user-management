const UserService = require('../service/userService')
const userService = new UserService()

module.exports = class UserController {

    getAll(req, res) {
        let result = userService.findAll()
        res.status(200).send(result)
    }

    async getById(req, res) {
        try {
            let id = req.params.id
            let result = await userService.findById(id)
            res.json(result)
        } catch (userNotFoundError) {
            res.send(userNotFoundError)
        }
    }

    async create(req, res) {
        try {
            let user = req.body
            let result = await userService.create(user)
            res.status(201);
            res.send({
                "message": `User created successfully`,
                result
            })
        } catch (userCreationError) {
            res.send(userCreationError)
        }
    }

    update(req, res) {
        let user = req.body
        userService.update(user)
        res.status(201)
        res.send()
    }

    delete(req, res) {
        let id = req.query[0].value
        let result = userService.deleteById(id)
        res.json(204, result)
    }
}