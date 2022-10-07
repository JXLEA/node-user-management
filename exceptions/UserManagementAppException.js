class UserManagementError extends Error {

    constructor(name, status, isOperational, message) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name
        this.status = status
        this.isOperational = isOperational
        Error.captureStackTrace(this)
    }
}

module.exports = UserManagementError