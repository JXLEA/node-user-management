const UserRepository = require('../repository/userRepository')
const userRepository = new UserRepository()
const UserCreationError = require("../error/UserCreationError")
const UserNotFoundError = require("../error/UserNotFoundError")
const UserManagementError = require("../error/UserManagementAppError");

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
        try {
            return await userRepository.update(user);
        } catch (error) {
            throw new UserManagementError(`Cannot update user with id: ${user.id}`)
        }
    }

    async deleteById(id) {
        try {
            return await userRepository.deleteById(id)
        } catch (error) {
            throw new UserManagementError(`Cannot delete user with id: ${id}`, 500, false, error.message)
        }
    }
}