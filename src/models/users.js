const { DataTypes } = require('sequelize');
const sequelize = require("../db");

const users = sequelize.define('users', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    required: true,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: DataTypes.STRING,
  profile_picture: DataTypes.STRING,
  token: DataTypes.STRING,
  created_at: DataTypes.DATE
}, {
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
  paranoid: false,
});

module.exports = users