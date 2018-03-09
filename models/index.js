require('dotenv').config()
var Sequelize = require('sequelize')

//INIT DB

var sequelize = new Sequelize(process.env.DATABASE_URL)
//process.env.DATABASE_URL
//postgres://user:pass@example.com:5432/dbname
let db = {}
//INIT MODEL
db.user = sequelize.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING
})

//yes
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = db
