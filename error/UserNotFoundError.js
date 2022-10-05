const UserManagementAppError = require('./UserManagementAppError')

module.exports = class UserNotFoundError extends UserManagementAppError {

    constructor(
        name,
        status = 404,
        isOperational = false,
        message = 'User not found'
    ) {
        super(name, status, isOperational, message);
    }
}
