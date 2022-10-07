const {Model, DataTypes} = require('sequelize')
const sequelize = require('../utils/connection')

class Note extends Model {
}

Note.init(
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
)

module.exports = Note;