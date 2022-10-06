const {Model, DataTypes} = require('sequelize')
const sequelize = require('../util/connection')
const {Person} = require('./userModel')

class Note extends Model {
}

module.exports = Note.init(
    {
        id: {
            field: "id",
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.UUIDV1
        },
        body: {
            field: "body",
            notNull: true,
            type: DataTypes.TEXT
        },
        author: {
            field: "author",
            type: DataTypes.UUIDV1
        }
    },
    {
        sequelize,
        modelName: 'notes',
        timestamps: false

    }
).belongsTo(Person)