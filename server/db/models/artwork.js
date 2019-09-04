const Sequelize = require('sequelize')
const db = require('./database')

const Artwork = db.define('artwork', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Artwork
