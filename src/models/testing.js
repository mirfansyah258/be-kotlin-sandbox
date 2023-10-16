const { DataTypes } = require('sequelize');
const sequelize = require("../db");

const testing = sequelize.define('testing', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    required: true,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  telepon: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: false,
  paranoid: false,
});

module.exports = testing