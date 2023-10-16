require('dotenv').config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mariadb',
  timezone: '+07:00'
});
sequelize.authenticate().then(() => {
  console.log(`connection to mariadb.testing success`)
}).catch(err => {
  console.error(`failed connect to mariadb.testing`, err)
})

module.exports = sequelize