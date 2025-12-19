const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '192.168.1.240',
  port: 3308,
  database: 'trade',
  username: 'root',
  password: 'happylifeABC00'
});

module.exports = sequelize;