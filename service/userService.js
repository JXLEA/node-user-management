const UserRepository = require('../repository/userRepository')
const userRepository = new UserRepository()
const UserCreationError = require("../error/UserCreationError")
const UserNotFoundError = require("../error/UserNotFoundError")

module.exports = class UserService {

    async findAll() {
        return await userRepository.findAll();
    }

    async findById(id) {
        let user = await userRepository.findById(id)
        if (!user) {
            throw new UserNotFoundError(`User with id ${id} not found`)
        }
    }

    async create(user) {
        try {
            return await userRepository.create(user);
        } catch (error) {
            throw new UserCreationError(`Error happened during user creation`, 404, false, error.message)
        }
    }

    async update(user) {
        return await userRepository.update(user);
    }

    async deleteById(id) {
        return await userRepository.deleteById(id)
    }
}