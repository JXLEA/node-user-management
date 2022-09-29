const Sequelize = require('sequelize')

module.exports = new Sequelize('postgresql://localhost:5432/postgres', {dialect: 'postgres'})
