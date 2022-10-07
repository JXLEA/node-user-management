const UserService = require('../service/userService')
const userService = new UserService()

module.exports = class UserController {

    async getAll(req, res) {
        let result = await userService.findAll()
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
            res.status(201)
                .send(
                    {
                        "message": `User created successfully`,
                        result
                    })
        } catch (userCreationError) {
            res.send(userCreationError)
        }
    }

    async update(req, res) {
        try {
            let user = req.body
            await userService.update(user)
            res.status(201)
                .send({"message": `User updated successfully`})
        } catch (userManagementError) {
            res.send(userManagementError)
        }
    }

    async delete(req, res) {
        try {
            let id = req.params.id
            await userService.deleteById(id)
            res.status(204)
                .send({"message": " User deleted successfully"})
        } catch (userManagementError) {
            res.send(userManagementError)
        }
    }
}