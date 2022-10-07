const { userRepository } = require('../repositories')
const { UserCreationError } = require("../exceptions")
const { UserNotFoundError } = require("../exceptions")
const { UserManagementError} = require("../exceptions");

class UserService {

    async findAll() {
        return await userRepository.findAll();
    }

    async findById(id) {
        let user = await userRepository.findById(id)
        if (!user) {
            throw new UserNotFoundError(`User with id ${id} not found`)
        }
        return user;
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

module.exports = new UserService()