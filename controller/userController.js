const UserService = require('../service/userService')
const userService = new UserService()

module.exports = class UserController {

    getAll(req, res) {
        let result = userService.findAll()
            .then(data => {
                console.log(result)
                return data;
            })
            .then(data => res.status(200).send(data))
    }

    getBy(req, res) {
        let condition = {
            key: 'id',
            value: req.query[0].value
        }
        res.status(200);
        res.header('Content-Type', 'application/json')
        res.send(userService.findBy(condition))
        return res;
    }

    create(req, res) {
        let user = req.body
        res.status(200);
        res.header('Content-Type', 'application/json')
        res.send(userService.create(user))
        return res;
    }

    update(req, res) {
        let user = req.body
        res.headers(201, {
            'Content-Type': 'application/json'
        }).send(userService.update(user))
        return res;
    }

    delete(req, res) {
        let id = req.query[0].value
        res.json(204, userService.deleteById(id))
        return res;
    }
}